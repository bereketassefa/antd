import React from "react";

import Avatar from "../../Fields/Avatar/avatar";
import BRhotel from "../../assets/image/BRUHWAY-HOTEL.png";
import hello from "../../assets/image/hello.png";
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
function ChatField() {
  return (
    <div className="w-[500px] bg-[#F0F0F0] h-[600px] flex flex-col justify-between ">
      <div className="flex  bg-[#F9F7F7] ">
        <Avatar img={BRhotel} /> <p>Company Name</p>{" "}
      </div>
      <div className="  rounded-md ml-32 w-60 flex flex-col  justify-center items-center bg-white    ">
        <h1 className="text-[18px] font-bold">No messages yet....</h1>
        <p className="text-[16px] font-normal">
          Send a message or reply with <br /> a greeting sticker below!
        </p>
        <img src={hello} alt=" Hello EveryOne" />
      </div>

      <div className="flex bg-gray-100 justify-center items-center mx-1 mb-1 px-4 border border-gray-300 rounded-md">
        <BsEmojiSmile className="text-3xl mr-2" />
        <textarea
          name="message"
          className="w-full bg-transparent outline-none resize-none"
          placeholder="Type your message..."
        ></textarea>
        <button className=" bg-whit flex items-center gap-3">
          <ImAttachment className=" text-xl" />
          <BiLogoTelegram className="text-white text-xl bg-[#D71A62]" />
        </button>
      </div>
    </div>
  );
}

export default ChatField;
