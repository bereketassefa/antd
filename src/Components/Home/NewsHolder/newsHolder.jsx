import React, { useEffect,useContext, useRef, useState } from 'react';
import NewsCard from '../NewsCard/newsCard';
import { ErrorContext } from '../../Error/ErrorContext';
import { message } from 'antd';
import axios from 'axios';

export default function NewsHolder() {
  const { displayError } = useContext(ErrorContext);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // Start from page 1
  const elementRef = useRef(null);
  const [error, setError] = useState(null);
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

  async function fetchMoreTimelines() {
    let serverDownTimer;
   
    try {
      setLoading(true);
  
      serverDownTimer = setTimeout(() => {
       
        setLoading(false);
      }, 20000); // Set the timer for 10 seconds

      loadingMsg = message.loading('Loading news...', 0);
      setTimeout(() => {
          loadingMsg();  // Close the loading message after 1 minute
          message.error("Loading took too long. Please try again later.");  // Inform the user
      }, 10000); 
  
      const Url = `${import.meta.env.VITE_GET_ALL_POSTS}`;
      // const response = await fetch(Url);
      try {
        loadingMsg(); 
        await axios.get(Url)
        .then((response)=>{
          setLoading(false);
          setHasMore(false);
          setTimeout(loadingMsg, 0);
          if(response.status === 200){
            console.log(response)
            setTimeline(response.data)
          }  
        })
      } catch (error) {
        setLoading(false);
        setHasMore(false);
        setTimeout(loadingMsg, 0);
        message.error('faild to fetch ')
      }
  
     
  
      // const data = await response.json();
      //  console.log(data);
      // loadingMsg(); 
      // if (data.length == 0) {
      //   setLoading(false);
      //   setHasMore(false);
      //   setTimeout(loadingMsg, 0);
         
      // } else {
      //   message.error("no data found.");
      // }
  
      clearTimeout(serverDownTimer); // Clear the timer if data is fetched successfully before 10 seconds
    } catch (error) {
      setLoading(false);
     
      if (error.message === "Failed to fetch") {
        message.error("Network Error: Failed to fetch data.");
        loadingMsg(); 
      } else {
        message.error("Error fetching data.");
        loadingMsg(); 
      }
    } finally {
      setLoading(false);
      setTimeout(() => {
        if (loading) {
          displayError("Server down");
        }
      }, 20000);
    }
  }
  

  function onIntersection(entries) {
    if (entries[0].isIntersecting && hasMore) {
      fetchMoreTimelines();
    }
  }
  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
}

  return (
    
    <div className='flex flex-col gap-2 w-full max-w-[550px]'>
      {timeline.map((item, index) => (
        <NewsCard
          key={index}
          image={item.image}
          newContent={item.description}
          timestamp={item.time}
          id={item.id}
          like={item.like}
          comanyName={item?.party?.party?.businessname}
        />
      ))}
      {loading && (
  <div className="flex justify-center items-center h-[250px]"> {/* h-[100px] gives some height to the container so the spinner can be centered */}
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
  </div>
)}

      <div ref={elementRef}></div>
      
    </div>
  );
}
