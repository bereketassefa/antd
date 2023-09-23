import React from "react";
import { BsPlus } from "react-icons/bs";
import Avatar from "../../Fields/Avatar/avatar";
const ChatCard = ({
  title,
  image,
  description,
  onSelect,
  AmoutOfmessage,
  time,
}) => {
  return (
    <div className="gap-4 hover:bg-slate-200 " onClick={onSelect}>
      <div className="flex items-center justify-start  gap-2 ">
        <div>
          {" "}
          <Avatar img={image} />
        </div>

        <div className="w-full flex  justify-between  ">
          <p className=" font-bold text-[#000] text-center text-[17px]">
            {title}
          </p>
          <p className="text-[#000] text-[15px]">{time}</p>
        </div>
      </div>
      <div className="flex  justify-between">
        <p className="  ml-12 w-[300px]">{description}</p>
        <div
          className={`${
            AmoutOfmessage > 0 ? "flex" : "hidden"
          } bg-[#D71A62] rounded-full h-6 w-6 items-center text-white text-[10px] `}
        >
          <BsPlus />
          {AmoutOfmessage}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
