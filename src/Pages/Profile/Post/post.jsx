import React, { useEffect,useContext, useRef, useState } from 'react';
import { message } from 'antd';
import axios from 'axios';
import NewsCard from '../../../Components/Home/NewsCard/newsCard';
import { ErrorContext } from '../../../Components/Error/ErrorContext';
export default function Post(props) {
  // console.log(window.location.pathname.split('/')[3])
   const id =window.location.pathname.split('/')[3]
console.log(id)
  const { displayError } = useContext(ErrorContext);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetchMoreTimeliness()
    });

  
  async function fetchMoreTimeliness() {
   
    try {
     
  
      const Url = `${import.meta.env.VITE_GET_MY_DATA}/${id}`;
      // const response = await fetch(Url);
      try {
       
        await axios.get(Url)
        .then((response)=>{
           
          if(response.status === 200){
            console.log(response)
            setTimeline(response.data)
          }  
        })
      } catch (error) {
       
        message.error('faild to fetch ')
      }
  
     
    } catch (error) {
      setLoading(false);
    
    } finally {
      setLoading(false);
      setTimeout(() => {
        if (loading) {
          displayError("Server down");
        }
      }, 20000);
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
          comanyName={timeline?.party?.party?.businessname}
        />
      ))}
    </div>
  );
  
}
