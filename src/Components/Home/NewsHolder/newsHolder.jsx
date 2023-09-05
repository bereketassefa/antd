import React, { useEffect,useContext, useRef, useState } from 'react';
import NewsCard from '../NewsCard/newsCard';
import { ErrorContext } from '../../Error/ErrorContext';

import { message } from 'antd';
import axios from 'axios';
// import { useCookies } from 'react-cookie';
export default function NewsHolder() {
  const { displayError } = useContext(ErrorContext);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  // const [page, setPage] = useState(1); // Start from page 1
  const elementRef = useRef(null);
  const [error] = useState(null);
  // const [cookies] = useCookies(['user'])
  let loadingMsg;

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      threshold: 1.0
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
      
    }

    return () => observer.disconnect();
  }, [timeline, hasMore]);

  // async function fetchMoreTimelines() {
  //   let serverDownTimer;
   
  //   try {
  //     setLoading(true);
  
  //     serverDownTimer = setTimeout(() => {
       
  //       setLoading(false);
  //     }, 20000); // Set the timer for 10 seconds

  //     loadingMsg = message.loading('Loading news...', 0);
  //     setTimeout(() => {
  //         loadingMsg();  // Close the loading message after 1 minute
  //         // message.error("Loading took too long. Please try again later.");  // Inform the user
  //     }, 10000); 
  
  //     const Url = `${import.meta.env.VITE_GET_ALL_POSTS}`;
  //     // const response = await fetch(Url);
  //     try {
  //       loadingMsg(); 
  //       await axios.get(Url)
  //       .then((response)=>{
  //         setLoading(false);
  //         setHasMore(false);
  //         setTimeout(loadingMsg, 0);
  //         if(response.status === 200){
  //          console.log(response.data)
  //           setTimeline(response.data)
  //         }  
  //       })
  //     } catch (error) {
  //       setLoading(false);
  //       setHasMore(false);
  //       setTimeout(loadingMsg, 0);
  //       // message.error('faild to fetch ')
  //     }

  
  //     clearTimeout(serverDownTimer); // Clear the timer if data is fetched successfully before 10 seconds
  //   } catch (error) {
  //     setLoading(false);
     
  //     if (error.message === "Failed to fetch") {
  //       message.error("Network Error: Failed to fetch data.");
  //       loadingMsg(); 
  //     } else {
  //       message.error("Error fetching data.");
  //       loadingMsg(); 
  //     }
  //   } finally {
  //     setLoading(false);
  //     setTimeout(() => {
  //       if (loading) {
  //         displayError("Server down");
  //       }
  //     }, 20000);
  //   }
  // }
  useEffect(() => {
    try {
      setLoading(true);
      const eventSource = new EventSource(`${import.meta.env.VITE_GET_ALL_POSTS}`);
    
    eventSource.onmessage = (event) => {
      setLoading(false);
      const eventData = JSON.parse(event.data); // This should be an array
      console.log("Parsed event data:", eventData);
      if (eventData == []){
        message.error('empty')
      }
      // Iterate through the array and log the 'id' of each object
      eventData.forEach((item) => {
        if ('id' in item) {
          console.log("ID exists:", item.id);
        } else {
          console.log("ID does not exist in item");
        }
      });
      
      setTimeline(eventData);

    };
    
    eventSource.onerror = (error) => {
      console.error('SSE Error:', error);
    };
    
    return () => {
      eventSource.close();
    };
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    
  }, []);
  
  

  function onIntersection(entries) {
    if (entries[0].isIntersecting && hasMore) {
    //  fetchMoreTimelines();
    }
  }
  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
}

const NewsCardSkeleton = () => (
  <div className="w-full p-4 rounded shadow bg-white">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="flex flex-col gap-1">
          <div className="w-24 h-4 rounded bg-gray-200 animate-pulse"></div>
          <div className="w-16 h-4 rounded bg-gray-200 animate-pulse"></div>
        </div>
      </div>
      <div className="w-6 h-6 rounded bg-gray-200 animate-pulse"></div>
    </div>

    <div className="flex flex-col mt-4">
      <div className="w-full h-4 rounded bg-gray-200 animate-bounce"></div>
      <div className="w-full h-32 mt-4 rounded bg-gray-200 animate-pulse"></div>
    </div>

    <div className="flex gap-4 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gray-200 animate-pulse"></div>
        <div className="w-8 h-4 rounded bg-gray-200 animate-bounce"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gray-200 animate-pulse"></div>
        <div className="w-8 h-4 rounded bg-gray-200 animate-bounce"></div>
      </div>
    </div>
  </div>
);



if (error) {
  return <div className="flex justify-center items-center h-screen">{error}</div>;
}

return (
  <div className='flex flex-col gap-2 w-full max-w-[550px]'>
    {loading ? (
      // Show 5 skeleton cards while loading
      Array.from({ length: 5 }).map((_, index) => <NewsCardSkeleton key={index} />)
    ) : (
      timeline.map((item, index) => (
        <NewsCard
          key={index}
          image={item?.image}
          newContent={item?.description}
          profilePic={item?.account[0]?.profilePicture}
          timestamp={item?.time}
          id={item?.id}
          like={item?.like}
          companyName={item?.party?.party[0]?.party?.businessname}
          account_id={item?.account[0]?._id}
        />
      ))
    )}
    <div ref={elementRef}></div>
  </div>
);
}