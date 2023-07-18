import React, { useState } from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function CommentCard({img,companyName, time , comment , likes , replays}) {
    const [showReplys , setShowReplays] = useState(false)

    const onShowReplay = ()=>{
         setShowReplays(!showReplys)
    }

  return (
     <>
      <div className='w-full flex gap-2'>
        <div className='flex'>
            <Avatar 
                img={img}
            />
        </div>
        <div className='bg-lightBg flex flex-col w-full p-4 gap-3' >
             <div className='w-full flex items-center justify-between'>
                 <div className='flex flex-col'>
                     <h1 className=' text-smallP md:text-midP lg:text-largeP font-bold'>{companyName}</h1>
                     <span className=' text-smallP md:text-midP text-gray-500'>{time}</span>
                 </div>
                 <FontAwesomeIcon icon={faEllipsisVertical} />
             </div>
             <div>
                <p className=' text-smallP md:text-midP lg:text-largeP '>
                    {comment}
                </p>
             </div>
             <div className='flex w-full items-center justify-start gap-4'>
                 <p className=' text-smallP md:text-midP lg:text-largeP text-secondary cursor-pointer '>Likes <span>({likes})</span></p>
                 <p  className=' text-smallP md:text-midP lg:text-largeP cursor-pointer flex gap-1 ' 
                    onClick={onShowReplay}
                 > 
                    Replay 
                <span>{replays?.length} </span></p>
             </div>
        </div>
    </div>
    <div className={showReplys ? 'flex flex-col gap-2 ml-[45px]':  'hidden'}>
        {
           replays?.map((items)=>{
             return (
                <>
                <CommentCard
                            img={items.img}
                            companyName={items.companyName}
                            time={items.time}
                            comment={items.comment}
                            likes={items.likes}
                            replays={items.repays}            
                        />
                </>
             )
           }) 
        }
    </div>
     </>
  )
}
