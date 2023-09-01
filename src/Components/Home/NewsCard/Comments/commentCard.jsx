import React, { useEffect, useState } from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import profilePlaceHolder from '../../../../assets/logo/newCompanyPlaceHolder.png';
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";

import axios from 'axios'

export default function CommentCard({id,img,companyName, time , comment , likes , replays}) {
    
    
    const [showReplys , setShowReplays] = useState(false)
    const [profilePic, setProfilePic]= useState(null) 

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

    useEffect(() => {
        const fetchAccountDataForProfile = async () => {
            try {
                const url= `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${id}`
                // const url= `http://localhost:8010/account/${cookies?.user._id}`;
                await axios.get(url)
                .then((res)=>{
                    // console.log(res)
                    if(res?.data){
                        setProfilePic(res?.data[0]?.profilePicture);
                       
                    }
                   
                })
                .catch((error)=>{
                    // message.error('Cant find user account')
                })
                
            } catch (error) {
                console.error("Error fetching profile picture:", error);
            }
        };
    
        fetchAccountDataForProfile();
       
    }, []);

  return (
     <>
      <div className='w-full flex gap-2'>
        <div className='flex'>
        <Avatar 
    onClick={hadleNavigateProfile}
    img={profilePic? profilePic: alternativeProfile}
   
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
                 <p className=' text-smallP md:text-midP lg:text-largeP text-secondary cursor-pointer '>Likes <span>{likes ===0?'':likes }</span></p>
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
                            key={item?.id || item?._id}
                            img={item?.img}
                            companyName={item?.companyName}
                            time={item?.time}
                            comment={item?.comment}
                            likes={item?.likes}
                            replays={item?.repays}
                        />
                    ))
                }
            </div>
     </>
  )
}
