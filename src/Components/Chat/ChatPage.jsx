import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Chat } from "../../data";
import SearchCard from "../../Components/SearchAllCompo/SearchCard";
import { BiLogoTelegram } from "react-icons/bi";
import Avatar from "../../Fields/Avatar/avatar";
import BRhotel from "../../assets/image/BRUHWAY-HOTEL.png";
import hello from "../../assets/image/hello.png";
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";

function ChatPage() {
  const [chatInput, setChatInput] = useState("");
  const [chatField, setChatField] = useState(true);

  const handleStartMessage = () => {
    setChatField(false);
  };

  return (
    <div className="flex">
      <div className=" ml-2 w-[350px]">
        <div className=" ml-3 flex justify-between ">
          <div className="">
            <div className="  flex gap-2 border-[2px] border-blue-800 py-[8px] px-2 items-center min-w-[200px] ">
              <div>
                <FiSearch className="text-xl text-gray-500 " />
              </div>
              <input
                className=" outline-none text-[17px] "
                type="text"
                value={chatInput}
                placeholder="Search"
                onChange={(e) => {
                  setChatInput(e.target.value);
                }}
              />
            </div>
          </div>
          <div className=" mr-4 border-2 border-[#3222C6] text-[#D71A62] rounded-full p-2 ">
            <AiOutlinePlus className="text-2xl " />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <BiSolidMessageRounded className="text-3xl " />
          <p>Message</p>
        </div>
        <div className="gap-2 w-[350px]  p-1 border-[2px] mt-5 translate-y-[1px]">
          <div className=" flex flex-col gap-4 ">
            {Chat.filter((item) =>
              item.title.toLowerCase().includes(chatInput.toLowerCase())
            ).map((Chat) => (
              <SearchCard
                key={Chat.key}
                title={Chat.title}
                image={Chat.image}
                description={Chat.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-[500px] bg-[#F0F0F0] h-[650px]">
        {chatField ? (
          <div className="flex flex-col justify-center items-center pt-40">
            <div className="p-6 border-2 border-blue-900 rounded-full">
              <BiLogoTelegram className="text-5xl text-[#D71A62]" />
            </div>
            <p className="text-[15px] font-semibold my-3">
              Wanna start a new conversation?
            </p>
            <button
              className="bg-[#D71A62] py-2 px-2 rounded-sm"
              onClick={handleStartMessage}
            >
              Start message
            </button>
          </div>
        ) : (
          <div className="w-[500px] bg-[#F0F0F0] h-[600px] flex flex-col justify-between">
            <div className="flex bg-[#F9F7F7]">
              <Avatar img={BRhotel} />
              <p>Company Name</p>
            </div>
            <div className="rounded-md ml-32 w-60 flex flex-col justify-center items-center bg-white">
              <h1 className="text-[18px] font-bold">No messages yet....</h1>
              <p className="text-[16px] font-normal">
                Send a message or reply with <br /> a greeting sticker below!
              </p>
              <img src={hello} alt="Hello Everyone" />
            </div>

            <div className="flex bg-gray-100 justify-center items-center mx-1 mb-1 px-4 border border-gray-300 rounded-md">
              <BsEmojiSmile className="text-3xl mr-2" />
              <textarea
                name="message"
                className="w-full bg-transparent outline-none resize-none"
                placeholder="Type your message..."
              ></textarea>
              <button className="bg-whit flex items-center gap-3">
                <ImAttachment className="text-xl" />
                <BiLogoTelegram className="text-white text-xl bg-[#D71A62]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatPage;
