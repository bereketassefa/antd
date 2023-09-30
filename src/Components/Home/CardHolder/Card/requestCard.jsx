import  { useEffect, useRef, useState } from "react";
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import './scss/avatar.scss'
import { useCookies } from 'react-cookie'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connection } from "websocket";
export default function RequestCard({id , img, companyName,Uid,connectionsid}) {
  const navigate= useNavigate()
//  console.log(connectionsid)
const [profilePic, setProfilePic]= useState(null) 
const [loadingAccept, setLoadingAccept] = useState(false); // Add loading state for Accept
const [loadingCancel, setLoadingCancel] = useState(false);
function truncateCompanyName(name) {
  return name && name.length > 8 ? name.substring(0, 8) + '...' : name;
}
  
  function getFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toLowerCase();
}
  

const handleAcceptClick = async () => {
  setLoadingAccept(true);
  try {
    // Artificially delay the operation by 6 seconds
  
    console.log(connectionsid)
    const url = `${import.meta.env.VITE_ACCEPT_THE_RELATION}/${connectionsid}`;
    const response = await fetch(url, { method: "POST" });
    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, 9000));
  } catch (error) {
    console.error(error);
  } finally {
    setLoadingAccept(false);
  }
};


const handleCancelClick = async () => {
  setLoadingCancel(true);
  try {
    
    // Artificially delay the operation by 6 seconds
   
    // console.log(connectionsid)
    const url = `${import.meta.env.VITE_CANCEL_THE_RELATION}/${connectionsid}`;
    const response = await fetch(url, { method: "DELETE" });
    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    // console.log(data)
    await new Promise(resolve => setTimeout(resolve, 9000));
  } catch (error) {
    console.error(error);
  } finally {
    setLoadingCancel(false);
  }
};



  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
        try {
            const url =`${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${id}`

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
      <Avatar onClick={hadleNavigateProfile} img={profilePic?profilePic:alternativeProfile} />
        <h1 className="text-smallP md:text-midP lg:text-largeP">{truncateCompanyName(companyName)}</h1>
      </div>

      <div className="flex gap-2">
        <div
          onClick={handleAcceptClick}
          className="w-[40px] h-[40px] aspect-square rounded-full flex items-center justify-center border-2 border-primary cursor-pointer"
        >
          {loadingAccept ? (
            <div className="spinner"></div>
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-largeP md:text-smallT text-primary" />
          )}
        </div>
        <div
          onClick={handleCancelClick}
          className="w-[40px] h-[40px] aspect-square rounded-full flex items-center justify-center border-2 border-secondary cursor-pointer"
        >
          {loadingCancel ? (
            <div className="spinner"></div>
          ) : (
            <FontAwesomeIcon icon={faClose} className="text-largeP md:text-smallT text-secondary" />
          )}
        </div>
      </div>
    </div>
  );
}