import { useEffect, useRef, useState } from 'react';
import oopsno from '../../../assets/image/oops-no.png';
import NewsCard from './newsCard';
import { message } from 'antd';

export default function NewsHolder() {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);
  const [error, setError] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const url = `${import.meta.env.VITE_WITH_OUT_SSE_GET_TIMELINE}`;
        const response = await fetch(url);
        const data = await response.json();
        setTimeline(data);
      //  console.log(data);
      } catch (err) {
        console.log('Error fetching initial data' , err)
      } finally {
        setLoading(false);
      }
    };
    
    fetchInitialData();
  }, []);
    

  useEffect(() => {
    const eventSource = new EventSource(`${import.meta.env.VITE_GET_ALL_POST_V2}`);
    
    eventSource.onmessage = (event) => {
      try {
        const newData = JSON.parse(event.data);
        setTimeline((prevData) => [newData, ...prevData]);
        console.log(newData);
      } catch (err) {
        console.error('Error parsing SSE data:', err);
      }
    };
    
    eventSource.onerror = (err) => {
      console.error('SSE Error:', err);
      // setError('Error receiving live updates.');
      eventSource.close();
    };
    
    return () => {
      eventSource.close();
    };
  }, []);

    


  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
}

const NewsCardSkeleton = () => (
  <div className="dark:bg-[#1b1f23] w-full p-4 rounded shadow bg-white">
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

return (
  <div className='flex flex-col gap-2 w-full max-w-[550px]'>
    {loading ? (
    
      Array.from({ length: 5 }).map((_, index) => <NewsCardSkeleton key={index} />)
    ) : (
      Array.isArray(timeline) ? (
        
        timeline.map((item, index) => (
          
          <NewsCard
            key={index}
            image={item.images}
           
            newContent={item?.description}
            profilePic={item?.account?.profilePicture}
            timestamp={item?.time}
            id={item?.id}
            like={item?.like}
            companyName={item?.account?.party}
            account_id={item?.account?._id}
            Uid ={item?.uid}
          />
        ))
      ) :null
    )}
    <div ref={elementRef}></div>
  </div>
);

}
