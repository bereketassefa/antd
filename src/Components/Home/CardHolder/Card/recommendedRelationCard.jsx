import { faUserPlus,faCheck  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function RecommendedRelationCard({id , img, companyName,Uid}) {
  function truncateCompanyName(name) {
    return name && name.length > 8 ? name.substring(0, 8) + '...' : name;
  }
  const navigate= useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['User']);
    const [loadingSend, setLoadingSend] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const OwnerUid= cookies?.user?.Uid
    const handleRequestConectionlClick = async () => {
      setLoadingSend(true)
      try {
        const url = `${import.meta.env.VITE_SEND_CONNECION}`;
        const res = await axios.post(
          url,
          {
            node1: OwnerUid.toString(),
            node2: id.toString(),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
       setLoadingSend(false)
       setIsSuccessful(true);
      } catch (error) {
        setLoadingSend(false)
        console.error(
          "Error in handleRequestConectionlClick:",
          error.response ? error.response.data : error.message
        );
      }
    };
  const hadleNavigateProfile = async(e)=>{
    e.preventDefault();
    navigate(`/feed/profile/${Uid}`)

    // try {
    //     const response = await axios.get(`http://localhost:8013/find-my-data/${Uid}`);

    //       console.log(response.data)
    //     // console.log(cookies.user._id)
    //     window.location.href = `/feed/profile/${Uid}`;
         
    // } catch (error) {
    //     console.log(error);
    // }
}
    function getFirstLetter(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase();
    }
    return (
        <div className='flex items-center justify-between' key={id}>
            <div onClick={hadleNavigateProfile} className='flex gap-2 items-center'>
        <Avatar onClick={hadleNavigateProfile}  img={img? img : alternativeProfile } />
         
                
                <h1 className='text-smallP md:text-midP lg:text-largeP' >{truncateCompanyName(companyName).toLowerCase()}</h1>
            </div>

            <div className='flex gap-2'>
        {loadingSend ? (
         <div className="spinner"></div>
         // Display a loading text (or spinner) while loading
        ) : isSuccessful ? (
          <FontAwesomeIcon icon={faCheck} className='text-largeP md:text-smallT text-success' />  // Display check icon on success
        ) : (
          <FontAwesomeIcon onClick={handleRequestConectionlClick} icon={faUserPlus} className='text-largeP md:text-smallT text-secondary' />
        )}
      </div>
    </div>
  );
}