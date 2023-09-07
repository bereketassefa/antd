import React, { useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Chat } from "../../data";
import { BiLogoTelegram } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import Avatar from "../../Fields/Avatar/avatar";
import CuteGirl from "../../assets/image/cute-girl-pic (12).jpg";
import { comments } from "../../data";
import ChatCard from "../../Components/Chat/ChatCard";
import axios from "axios";
function ChatPage() {
  const [chatInput, setChatInput] = useState("");
  const [messageinput, setMessageInput] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [newChat, setNewchat] = useState("");
  const [messages, setMessages] = useState(comments);
  const containerRef = useRef(null);

  const handleStartMessage = () => {
    setNewchat(true);
  };

  const handleChatSelect = (selectedChat) => {
    setSelectedChat(selectedChat);
    setNewchat(false);
  };

  const handleSendMessage = async () => {
    console.log("Sending message:", messageinput);
    await sendMs(user, selectedChat); // Wait for the sendMs function to complete
    setMessageInput("");
  };

  // const searchUser=async()=>{
  //   try{
  //    const res = await axios.get("http://localhost:3000/chat?id=1")
  //    console.log(res.data)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  //   const sendMs=async(user,chat)=>{
  //  searchUser()
  //     try{
  //       const res = await axios.post("http://localhost:3000/chat/message", {
  //         id: 2,
  //         sender: user.name,
  //         recipient: chat.title,
  //         content: messageinput,
  //         timestamp: "22",
  //       });
  //       console.log(res)
  //       return res
  //     }catch(e){console.log(e)}
  //   }

  const handleMessageSubmit = () => {
    // e.preventDefault();
    const newlyAddedComment = {
      key: 33,
      // image: star,
      CompanyName: "Me",
      message: messageinput,
      fromOther: false,
    };
    setMessages([...messages, newlyAddedComment]);
    setMessageInput("");
    setTimeout(() => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, 1);
  };

  return (
    <div>
      <div className=" flex">
        <div className="  ml-2 w-[350px]">
          <div className=" ml-3 flex justify-between ">
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

            <div className=" mr-6 mt-2 border-2 border-[#3222C6] text-[#D71A62] rounded-full w-8 h-8 p-1 ">
              <AiOutlinePlus className="text-xl " />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <BiSolidMessageRounded className="text-3xl " />
            <p>Message</p>
          </div>
          <div className="gap-2 w-[350px] p-1 mt-5 translate-y-[1px]">
            <div className="flex flex-col gap-4">
              {Chat.filter((item) =>
                item.title.toLowerCase().includes(chatInput.toLowerCase())
              ).map((chat) => (
                <ChatCard
                  key={chat.key}
                  title={chat.title}
                  image={chat.image}
                  description={chat.description}
                  onSelect={() => handleChatSelect(chat)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[500px] bg-[#F0F0F0] h-[650px]">
          {selectedChat ? (
            newChat ? (
              <div className="w-[500px] bg-[#F0F0F0] h-[600px] flex flex-col justify-between">
                <div className="flex bg-[#F9F7F7]">
                  <Avatar img={selectedChat.image} />
                  <p>{selectedChat.title}</p>
                </div>
                <div
                  ref={containerRef}
                  className="  rounded-md flex flex-col  px-4 mt-4 max-h-[500px]  overflow-y-scroll overflow-x-hidden gap-6"
                >
                  {messages?.map((comment, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        comment.fromOther ? "justify-start" : "justify-end"
                      } flex gap-2`}
                    >
                      {comment.fromOther && (
                        <div className=" w-12 h-10 rounded-full overflow-hidden ">
                          <img
                            src={comment.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className=" w-full ">
                        <h4
                          className={`font-semibold text-lg ${
                            comment.fromOther ? "text-left" : "text-right"
                          }`}
                        >
                          {comment.CompanyName}
                        </h4>
                        <p
                          className={`font-bold ${
                            comment.fromOther ? "text-left" : "text-right"
                          }`}
                        >
                          <span className=" font-normal ">
                            {comment.message}
                          </span>
                        </p>
                      </div>
                      {!comment.fromOther && (
                        <div className=" ">
                          <img
                            src={CuteGirl}
                            alt=""
                            className="w-12  h-10 rounded-full object-cover "
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {!newChat && (
                  <div
                    className="rounded-md ml-32 w-60 flex flex-col justify-center items-center bg-white"
                    onClick={handleSendMessage}
                  >
                    <h1 className="text-[18px] font-bold">
                      No messages yet....
                    </h1>
                    <p className="text-[16px] font-normal">
                      Send a message or reply with <br /> a greeting sticker
                      below!
                    </p>
                    <BsEmojiSmile className="text-7xl m-2 text-[#D71A62]" />
                  </div>
                )}

                <div className="flex bg-gray-100 justify-center items-center mx-1 mb-1 px-4 border border-gray-300 rounded-md">
                  <BsEmojiSmile className="text-3xl mr-2" />

                  <textarea
                    name="message"
                    value={messageinput}
                    className="w-full bg-transparent outline-none resize-none"
                    placeholder="Type your message..."
                    onChange={(e) => setMessageInput(e.target.value)}
                  ></textarea>
                  <div
                    className="bg-whit flex items-center gap-3"
                    onClick={handleMessageSubmit} // Add onClick event handler
                  >
                    <ImAttachment className="text-xl" />
                    <BiLogoTelegram className="text-white text-xl bg-[#D71A62]" />
                  </div>
                </div>
              </div>
            ) : (
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
            )
          ) : (
            <div className="flex flex-col justify-center items-center pt-40">
              <div className="p-6 border-2 border-blue-900 rounded-full">
                <BiLogoTelegram className="text-5xl text-[#D71A62]" />
              </div>
              <p className="text-[15px] font-semibold my-3">
                Select a Chat to Start Messaging!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
