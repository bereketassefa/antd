import React from "react";
import Avatar from "../../Fields/Avatar/avatar";
import alternativeProfile from "../../assets/image/alternativeProfile.png";
import axios from "axios";
const RelationCard = ({ _id,profilePic,companyName, title, image }) => {
  
  // const placeholder = companyName?.charAt(0).toLowerCase();
  const hadleNavigateProfile = async(e)=>{
    e.preventDefault();
    try {
        const url =`${import.meta.env.VITE_FIND_MY_DATA}/${_id}`
         await axios.get(url);
        window.location.href = `/feed/profile/${_id}`;
        
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div onClick={hadleNavigateProfile} className="border-2 border-blue-700 flex items-center 
    justify-center gap-2 sm:w-[185px] w-[130px] min-h-[140px] flex-col duration-300">
        <Avatar img={profilePic? profilePic:alternativeProfile }/>

      <h2 onClick={hadleNavigateProfile} className="font-bold text-[#000] text-center text-[17px]">
        {companyName}
      </h2>
    </div>
  );
};

export default RelationCard;

