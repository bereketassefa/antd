import React from "react";
import Avatar from "../../Fields/Avatar/avatar";
const SearchCard = ({ title, image, description }) => {
  return (
    <div className="gap-4 hover:bg-slate-200 ">
      <div className="flex items-center justify-start  gap-2 ">
        <Avatar img={image} />

        <h2 className="  font-bold text-[#000] text-center text-[17px]">
          {title}
        </h2>
      </div>
      <p className="ml-12">{description}</p>
    </div>
  );
};

export default SearchCard;
