import React, { useState } from "react";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


const SearchCard = ({
  
  name,
  image,
  type,
  ProUid,
  onSelect,
}) => {

  
  const navigate = useNavigate();
  const [showresult, setShowResults]=useState(false)
  const handleSelect = () => {
    // Call the onSelect function with the selected item
    const selectedItem = { name, image, type, ProUid };
    onSelect(selectedItem);

    // Navigate to the desired page
    navigate(`/feed/SearchNav/${name}`, { state: { image, type, ProUid } });

    // Hide the search results
    setShowResults(false);
  };

  const displayableName = name.toLowerCase();
  const truncatedName =
    displayableName.length > 16
      ? `${displayableName.slice(0, 20)}..`
      : displayableName;

  return (
    <div className="gap-4">
      <div
        className="flex items-center justify-start gap-2 hover:bg-slate-400"
        onClick={handleSelect} // Add onClick event to the div
      >
        <img
          src={image ? image : alternativeProfile}
          className="w-[40px] md:w-[40px] object-cover"
        />
        <h2 className="dark:text-white text-[13px] text-[#000] text-center sm:text-[17px]">
          {truncatedName}
        </h2>
      </div>
    </div>
  );
};

export default SearchCard;
