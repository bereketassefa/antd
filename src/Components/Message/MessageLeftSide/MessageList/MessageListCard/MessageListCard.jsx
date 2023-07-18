import React from 'react'
import MsgTitle from '../Titles/MsgTitle'

export default function MessageListCard({proPc, ComName, Message, sentDate, unReadMsg}) {
  return (
    <>
      <div className='flex flex-row justify-between items-center p-3 hover:bg-lightPrimaryHover'>
       <img src={proPc}  alt={proPc} className='w-12 h-12 object-fill rounded-full '  />
       <div className='flex flex-col'>
        <h2 className='text-lg font-bold font-Nunito'>{ComName}</h2>
        <span className='text-sm'>{Message}</span>
       </div>
        <div className='flex flex-col justify-between items-center'>
        <span className='text-sm mb-3'>{sentDate}</span>
        {unReadMsg ? <span className='text-xs text-white bg-secondary shadow-sm rounded-full p-1'>{unReadMsg}</span>: null}
        </div>
      </div> 
    </>
  )
}
