import React, { useState } from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import profilePlaceHolder from '../../../../assets/logo/newCompanyPlaceHolder.png';

export default function CommentCard({id,img,companyName, time , comment , likes , replays}) {
    const [showReplys , setShowReplays] = useState(false)
    const navigate= useNavigate()
    const onShowReplay = ()=>{
         setShowReplays(!showReplys)
    }

    const hadleNavigateProfile = async(e)=>{
        e.preventDefault();
        // navigate(`/feed/profile/${_id}`)
    
        try {
            
            navigate(`/feed/profile/${id}`)
             
            // console.log(cookies.user._id)
            // window.location.href = `/feed/profile/${Uid}`;
             
        } catch (error) {
            console.log(error);
        }
    }

    function Avatar({ img, fallbackInitial, onClick }) {
    return (
        <div onClick={onClick} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>
            {img ? (
                <img src={img} alt="Profile" className="w-full h-full rounded-full" />
            ) : fallbackInitial ? (
                <span className="text-xl">{fallbackInitial.charAt(0)}</span>
            ) : (
                <img src={profilePlaceHolder} alt="Placeholder" className="w-full h-full rounded-full" />
            )}
        </div>
    );
}

  return (
     <>
      <div className='w-full flex gap-2'>
        <div className='flex'>
        <Avatar 
    onClick={hadleNavigateProfile}
    img={img}
    fallbackInitial={companyName || ''}
/>

        </div>
        <div className='bg-lightBg flex flex-col w-full p-4 gap-3' >
             <div className='w-full flex items-center justify-between'>
                 <div className='flex flex-col'>
                     <h1 onClick={hadleNavigateProfile} className=' text-smallP md:text-midP lg:text-largeP font-bold'>{companyName}</h1>
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
    <div className={showReplys ? 'flex flex-col gap-2 ml-[45px]' : 'hidden'}>
                {
                    replays?.map((item) => (
                        <CommentCard
                            key={item.id || item._id}
                            img={item.img}
                            companyName={item.companyName}
                            time={item.time}
                            comment={item.comment}
                            likes={item.likes}
                            replays={item.repays}
                        />
                    ))
                }
            </div>
     </>
  )
}
