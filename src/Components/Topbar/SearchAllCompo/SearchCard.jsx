import React from 'react';
import alternativeProfile from "../../../assets/image/alternativeProfile.png";

const SearchCard = ({ name, image, type }) => {
  const truncatedName = name ? name.substring(0, 8) : '';


  return (
    <div className="gap-4">
      <div className="flex items-center justify-start gap-2 hover:bg-slate-400 ">
        <img
          src={image? image : 'pro'}
          className="w-[40px] md:w-[40px] object-cover"
        />
        <h2 className="font-bold text-[#000] text-center text-[17px]">
          {truncatedName}
        </h2>
      </div>
    </div>
  );
};

export default SearchCard;
