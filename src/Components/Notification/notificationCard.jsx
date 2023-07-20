import React from 'react'
import Notice from './cards/notice'
import Like from './cards/like'
import Comment from './cards/comment'
import Request from './cards/request'

export default function NotificationCard({type,message,companyName,img,timeStamp,id}) {
  return (
    <div className='w-full flex items-center justify-between bg-notificationCardBg p-4 gap-2' key={id}  >
        <div className='flex gap-2 items-center'>
            <div className='p-[0.3rem] bg-primary rounded-full'></div>
            <div className='w-full' >
              {
                  type === 'notice'? <Notice  message={message}       />:
                  type === 'like' ? <Like companyName={companyName} img={img}  />: 
                  type === 'comment' ? <Comment companyName={companyName} img={img} />: 
                  type === 'request' ? <Request companyName={companyName} img={img} id={id}  /> :null
              }
            </div>
        </div>

        <div className='w-fit '>
            <span className='text-smallP md:text-midP lg:text-largeP'>{timeStamp}</span>
        </div>
    </div>
  )
}