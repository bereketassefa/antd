import React from 'react';
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import axios from 'axios';
import { useCookies } from 'react-cookie';

const SearchCard = ({ name, image, type }) => {
  const truncatedName = name ? name.substring(0, 8) : '';
  const [cookies] = useCookies(['user'])
  const hadleNavigateProfile = async(e)=>{
    e.preventDefault();
    try {
        const url =`${import.meta.env.VITE_FIND_MY_DATA}/${cookies.user._id}`
       await axios.get(url);
        //  console.log(response?.data)
        //   setProfilePic(response?.data?.account[0]?.profilePicture)

        // console.log(cookies.user._id)
        window.location.href = `/feed/profile/${cookies.user._id}`;
        
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="gap-4">
      <div className="flex items-center justify-start gap-2 hover:bg-slate-400 ">
        <img
        onClick={hadleNavigateProfile}
          src={image? image : 'pro'}
          className="w-[40px] md:w-[40px] object-cover"
        />
        <h2 onClick={hadleNavigateProfile} className="font-bold text-[#000] text-center text-[17px]">
          {truncatedName}
        </h2>
      </div>
    </div>
  );
};

export default SearchCard;
