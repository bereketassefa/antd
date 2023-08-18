import  { useEffect, useRef, useState } from "react";
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import './scss/avatar.scss'
import { useCookies } from 'react-cookie'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function RequestCard({id , img, companyName,Uid,connections}) {
  const navigate= useNavigate()
// console.log(connections)

function truncateCompanyName(name) {
  return name && name.length > 8 ? name.substring(0, 8) + '...' : name;
}
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [dataConnection, setConnectionData] = useState(null);
  const [AllData, setAllData] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  function getFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toLowerCase();
}
  

  const handleAcceptClick = async () => {
    try {
      const url= `${import.meta.env.VITE_ACCEPT_THE_RELATION}/${id}`
      const response = await fetch(
        url
        , {
        method: "POST", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
    // Handle accept click logic here
  };

  const handleCancelClick = async () => {
    try { 
      const url= `${import.meta.env.VITE_CANCEL_THE_RELATION}/${id}`
      const response = await fetch(
        url
        , {
        method: "DELETE", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
    // Handle cancel click logic here
  };

 

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
    <div className="flex items-center justify-between" key={id}>
      <div className="flex gap-2 items-center">
      {
                    img 
                    ? <Avatar img={img} />
                    : <div  onClick={hadleNavigateProfile} className="avatar-placeholder">{getFirstLetter(companyName)}</div>
                }
        <h1 className="text-smallP md:text-midP lg:text-largeP">{truncateCompanyName(companyName)}</h1>
      </div>

      <div className="flex gap-2">
        <div
          onClick={handleAcceptClick}
          className="w-[40px] aspect-square rounded-full flex items-center justify-center border-2 border-primary cursor-pointer"
        >
          <FontAwesomeIcon icon={faCheck} className="text-largeP md:text-smallT text-primary" />
        </div>
        <div
          onClick={handleCancelClick}
          className="w-[40px] aspect-square rounded-full flex items-center justify-center border-2 border-secondary cursor-pointer"
        >
          <FontAwesomeIcon icon={faClose} className="text-largeP md:text-smallT text-secondary" />
        </div>
      </div>
    </div>
  )}
