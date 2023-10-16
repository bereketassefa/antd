import React from "react";

import Avatar from "../../../../Fields/Avatar/avatar";
import {
  BiSolidUserPlus,
  BiMessageDetail,
  BiSolidUserCheck,
} from "react-icons/bi";

const SearchCardTwo = ({ title, image, time, description, status }) => {
  return (
    <div>
      {" "}
      <div className="flex  justify-between grid-flow-col md:grid-cols-2 items-center p-2   ">
        <div className="flex gap-[7px] ">
          {" "}
          <div>
            <Avatar img={image} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[#000] text-[17px]">{title}</h1>
            <p className="text-[13px] text-[#00000075]">{time}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {status === "connect" && (
            <div className="bg-secondary rounded-lg py-3 w-[120px]">
              <p className="text-sm text-white flex justify-center items-center gap-1">
                <BiSolidUserPlus className="text-white text-lg" />
                Connect
              </p>
            </div>
          )}
          {status === "connected" && (
            <div className="bg-secondary rounded-lg py-3 w-[120px]">
              <p className="text-sm text-white flex justify-center items-center gap-1">
                <BiSolidUserCheck className="text-white text-lg" />
                Connected
              </p>
            </div>
          )}
          {status === "Message" && (
            <div className="bg-primary rounded-lg py-3  w-[120px]">
              <p className="text-sm text-white flex justify-center items-center gap-1">
                <BiMessageDetail className="text-white text-lg" />
                Message
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="text-[13px] text-[#00000075] ml-16">{description}</p>
    </div>
  );
};

export default SearchCardTwo;
