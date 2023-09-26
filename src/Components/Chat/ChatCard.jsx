import React from "react";
import { BsPlus } from "react-icons/bs";
import Avatar from "../../Fields/Avatar/avatar";
function ChatCard({
  title,
  image,
  time,
  AmoutOfmessage,
  description,
  onSelect,
  isActive,
}) {
  return (
    <div
      className={`flex gap-4 items-center p-2 cursor-pointer ${
        isActive ? "bg-[#FFFFFF]" : "bg-[]"
      }`}
      onClick={onSelect}
    >
      <Avatar img={image} />
      <div className="flex flex-col">
        <h1 className="font-bold text-[#000] text-[17px]">{title}</h1>
        <p className="text-[13px] text-[#00000075]">{description}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-[#00000075]">{time}</p>
        {AmoutOfmessage > 0 && (
          <div className="bg-[#D71A62] w-5 h-5 rounded-full flex items-center justify-center">
            <p className="text-white text-xs">{AmoutOfmessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default ChatCard;
