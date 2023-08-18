import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import profileHolder from '../../../../assets/img/profileHolder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ProfileResult({companyName,_id,Uid}) {
  console.log(_id)
  const navigate= useNavigate()
  const hadleNavigateProfile = async(e)=>{
    e.preventDefault();
    // navigate(`/feed/profile/${_id}`)

    try {
        
        navigate(`/feed/profile/${_id}`)
         
        // console.log(cookies.user._id)
        // window.location.href = `/feed/profile/${Uid}`;
         
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='p-2 w-full flex gap-2 items-center justify-between  cursor-pointer '>
        <div className='flex items-start gap-2'>
            <Avatar onClick={hadleNavigateProfile} img={profileHolder} />
            <h1 onClick={hadleNavigateProfile}>{companyName}</h1>
        </div>
        <FontAwesomeIcon  icon={faClose} />
    </div>
  )
}
