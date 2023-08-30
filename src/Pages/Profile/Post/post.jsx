import React, { useEffect,useContext, useRef, useState } from 'react';
import { message } from 'antd';
import axios from 'axios';
import NewsCard from '../../../Components/Home/NewsCard/newsCard';
import { ErrorContext } from '../../../Components/Error/ErrorContext';
import io from 'socket.io-client';
export default function Post(props) {
  // console.log(window.location.pathname.split('/')[3])
   const id =window.location.pathname.split('/')[3]

   const socket = io('http://localhost:8020', {
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.5
  });
  

   socket.on('connect', () => {
     console.log('Successfully connected to the server.');
   });
   
   socket.on('data_updated', (newData) => {
     console.log('Received new data:', newData);
   
     // You can call your fetchMoreTimeliness function here,
     // or update the state directly if the new data is provided
     fetchMoreTimeliness();
   });
   

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
        setTimeline(response.data);
      }
    } catch (error) {
      message.error('Failed to fetch');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='flex flex-col w-full gap-2'>
      {timeline && timeline.timelines && timeline.timelines.map((item, index) => (
        <NewsCard
          key={index}
          image={item.image}
          newContent={item.description}
          timestamp={item.time}
          id={item.id}
          like={item.like}
          comanyName={timeline?.party}
        />
      ))}
    </div>
  );
  
}
