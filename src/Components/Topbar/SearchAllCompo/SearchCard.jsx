import React from 'react'
const SearchCard = ({ title, image }) => {
  return (
    <div className="gap-4   ">
      <div className="flex items-center justify-start  gap-2 hover:bg-slate-400 ">
        <img
          src={image}
          alt="Compang Name"
          className="w-[40px] md:w-[40px]  object-cover"
        />
        <h2 className="  font-bold text-[#000] text-center text-[17px]">
          {title}
        </h2>
      </div>
      
    </div>
  );
};

export default SearchCard

