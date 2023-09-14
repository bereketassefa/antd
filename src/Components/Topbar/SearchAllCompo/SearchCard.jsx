import React from 'react';
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const SearchCard = ({ setShowResults,name, image, type, ProUid }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    console.log("handleNavigation called");
    navigate(`/feed/SearchNav/${name}`, { state: { image, type, ProUid } });
    setShowResults(false);
    console.log("setShowResults called");
  };
  
  const displayableName = name.toLowerCase();
  const truncatedName =
    displayableName.length > 16 ? `${displayableName.slice(0, 20)}..` : displayableName;

  return (
    <div className="gap-4 ">
      <div className="flex items-center justify-start gap-2 hover:bg-slate-400">
        <img
          onClick={handleNavigation}
          src={image ? image : alternativeProfile}
          className="w-[40px] md:w-[40px] object-cover"
        />
        <h2
          onClick={handleNavigation}
          className="font-bold text-[#000] text-center text-[17px]"
        >
          {truncatedName}
        </h2>
      </div>
    </div>
  );
};

export default SearchCard;

