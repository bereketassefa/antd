import React, { useEffect, useState } from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";

export default function RelationCard({id , img, companyName}) {
    const [profilePic, setProfilePic]= useState(null) 
    const navigate= useNavigate()
    function truncateCompanyName(name) {
        return name && name.length > 10 ? name.substring(0, 10) + '...' : name;
      }
  

    const hadleNavigateProfile = async(e)=>{
        e.preventDefault();
        navigate(`/feed/profile/${id}`)
    }
    useEffect(() => {
        const fetchAccountDataForProfile = async () => {
            try {
                const url =`${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${id}`
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
        <div className='dark:text-white flex items-center justify-between ' key={id}>
            <div className='flex gap-2 items-center'>
            
                    
                    <Avatar onClick={hadleNavigateProfile} img={profilePic?profilePic:alternativeProfile} />
    
                
                <h1 onClick={hadleNavigateProfile} className='dark:text-white text-smallP md:text-midP lg:text-largeP' >{truncateCompanyName(companyName).toLowerCase()}</h1>
            </div>
        </div>
    )
}
