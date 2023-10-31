import React from "react";
import verifyd from "../../../assets/logo/verified.png";
import Avatar from "../../../Fields/Avatar/avatar";
const LikeCard = ({ companyName, image, date, icon }) => {
  return (
    <div className="flex justify-between items-center    gap-3">
      <div className="flex justify-center items-center gap-3">
        <Avatar className="h-8 w-8" img={image} />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-black font-bold">{companyName}</h1>
            <img src={verifyd} alt="" className="w-4 h-4 flex items-center " />
          </div>
          <p className="text-[15px] text-gray-800">{date}</p>
        </div>
      </div>

      <div className="text-2xl">{icon}</div>
    </div>
  );
};

export default LikeCard;
