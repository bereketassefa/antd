import React, { useEffect,useContext, useRef, useState } from 'react';
import { message } from 'antd';
import axios from 'axios';
// import NewsCard from '../../Components/Home/NewsCard/newsCard';
import { ErrorContext } from '../../../Components/Error/ErrorContext';
import io from 'socket.io-client';
import NewsCard from '../../../Components/Home/NewsHolder/newsCard';
export default function Post(props) {
  // console.log(window.location.pathname.split('/')[3])
   const id =window.location.pathname.split('/')[3]

console.log(id)

     // You can call your fetchMoreTimeliness function here,
     // or update the state directly if the new data is provided
    
 

// console.log(id)
  const { displayError } = useContext(ErrorContext);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([]);

  
  
  async function fetchMoreTimeliness() {
    try {
      setLoading(true);
      const Url = `${import.meta.env.VITE_GET_MY_DATA}/${id}`;
      const response = await axios.get(Url);
  
      if (response.status === 200) {
        setTimeline(response?.data);
       console.log(response.data)
      }
    } catch (error) {
      console.warn('Failed to fetch');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMoreTimeliness();
  }, [id]); // Fetch data when component mounts and when id changes
  

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
    <div className='flex flex-col w-full gap-2'>
     {loading ? (
      // Show 5 skeleton cards while loading
      Array.from({ length: 3 }).map((_, index) => <NewsCardSkeleton key={index} />)
    ) : (
     timeline && timeline?.timelines && timeline?.timelines.map((item, index) => (
        <NewsCard
        key={item?.id}
          image={item?.image}
          newContent={item?.description}
          timestamp={item?.time}
          id={item?.id}
          like={item?.like}
          companyName={timeline?.party}
        />
        ))
        )}
    </div>
  );
  
}
