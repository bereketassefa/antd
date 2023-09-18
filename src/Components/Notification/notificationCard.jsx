import React from 'react'
import Notice from './cards/notice'
import Like from './cards/like'
import Comment from './cards/comment'
import Request from './cards/request'
import { format, render, cancel, register } from 'timeago.js';
import axios from 'axios'
export default function NotificationCard({type,message,companyName,img,timeStamp,id,seen}) {
  const seeNotification=  async(id)=>{
   
    try {
      const url =`${import.meta.env.VITE_SEE_NOTIFICATION}/${id}`
     const res= await axios.post(url)
      
    } catch (error) {
      console.log(error);
    }
  }

 

  return (
    <div className='w-full flex items-center justify-between bg-notificationCardBg p-4 gap-2' key={id} onClick={()=>seeNotification(id)} >
        <div className='flex gap-2 items-center'>
            <div className={` p-[0.3rem] bg-primary rounded-full ${seen? 'hidden': ''}`}></div>
            <div className='dark:text-white w-full' >
              {
                  type === 'notice'? <Notice  message={message}       />:
                  type === 'like' ? <Like companyName={companyName} img={img}  />: 
                  type === 'comment' ? <Comment companyName={companyName} img={img} />: 
                  type === 'request' ? <Request companyName={companyName} img={img} id={id}  /> :null
              }
            </div>
        </div>

        <div className='w-fit '>
            <span className='dark:text-white text-smallP md:text-midP lg:text-largeP'>{format(timeStamp)}</span>
        </div>
    </div>
  )
}
