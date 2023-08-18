import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { useNavigate } from "react-router-dom";
export default function RelationCard({id , img, companyName}) {

    const navigate= useNavigate()
    function truncateCompanyName(name) {
        return name && name.length > 8 ? name.substring(0, 8) + '...' : name;
      }
    function getFirstLetter(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase();
    }


    const hadleNavigateProfile = async(e)=>{
        e.preventDefault();
        navigate(`/feed/profile/${id}`)
    
        // try {
        //     const response = await axios.get(`http://localhost:8013/find-my-data/${Uid}`);
    
        //       console.log(response.data)
        //     // console.log(cookies.user._id)
        //     window.location.href = `/feed/profile/${Uid}`;
             
        // } catch (error) {
        //     console.log(error);
        // }
    }
    
    return (
        <div className='flex items-center justify-between' key={id}>
            <div className='flex gap-2 items-center'>
            {
                    img 
                    ? <Avatar onClick={hadleNavigateProfile} img={img} />
                    : <div onClick={hadleNavigateProfile} className="avatar-placeholder">{getFirstLetter(companyName)}</div>
                }
                <h1 className='text-smallP md:text-midP lg:text-largeP' >{truncateCompanyName(companyName)}</h1>
            </div>
        </div>
    )
}
