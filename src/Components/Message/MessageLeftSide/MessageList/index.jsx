import React from 'react'
import MessageListCard from './MessageListCard/MessageListCard'
import MsgTitle from './Titles/MsgTitle'
import {  faMessage } from '@fortawesome/free-solid-svg-icons'
export default function MessageLists({data}) {

  return (
    <div>
      <MsgTitle 
       icon={faMessage}
       iconStyle="text-[24px] text-DarkGrayColor"
       Title="Message"
      />
      <div className='mt-2'>
        {
          data.map((item,index) => (
            <MessageListCard 
            proPc={item.proPc}
            ComName={item.ComName}
            Message={item.Message}
            sentDate={item.sentDate}
          />
          ))
        }
      </div>
    </div>
  )
}
