import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
import { Chat, ChatWithAddisPay } from "../../data";
import { BiLogoTelegram } from "react-icons/bi";
import { BsEmojiSmile, BsArrowLeftShort } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import moment from "moment";
import Avatar from "../../Fields/Avatar/avatar";
import CuteGirl from "../../assets/image/cute-girl-pic (12).jpg";
import { comments } from "../../data";
import ChatCard from "../../Components/Chat/ChatCard";
import axios from "axios";
import messagelogo from "../../assets/logo/addisLogoS.png";

function ChatPage() {
  const [chatInput, setChatInput] = useState("");
  const [messageinput, setMessageInput] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState("");
  const [chatData, setChatData] = useState([]);
  const [activeLink, setActiveLink] = useState("");
  const [newChat, setNewchat] = useState("");
  const [messages, setMessages] = useState(comments);
  const containerRef = useRef(null);
  const [file, setFile] = useState(null);
  const [clicked, setClicked] = useState(false)

  const handleStartMessage = () => {
    setNewchat(true);
  };

  const handleChatSelect = (selectedChat) => {
    setSelectedChat(selectedChat);
    console.log("SelectedChat:", selectedChat);
    setActiveLink("selectedChat");
    setChatData(selectedChat.chatData || []);
    setClicked(true)
  };

  const handleSendMessage = async () => {
    console.log("Sending message:", messageinput);

    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        // Make an API call to upload the image
        const response = await axios.post("/api/uploadImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image uploaded:", response.data);

        // Merge the image URL with the message
        const messageWithImage = `${messageinput} <img src="${response.data.url}" alt="Image" />`;

        await sendMs(user, selectedChat, messageWithImage);
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    } else {
      await sendMs(user, selectedChat, messageinput);
    }

    setMessageInput("");
  };

  const handleMessageSubmit = () => {
    const newlyAddedComment = {
      key: 33,
      CompanyName: "Me",
      message: messageinput,
      timestamp: new Date().getTime(), // Add timestamp property
      attachement: selectedImage ? selectedImage : null,

      // Other properties...
    };

    // setMessages([...messages, newlyAddedComment]);
    setChatData([...chatData, newlyAddedComment]);
    setMessageInput("");
    setSelectedImage(null);
    setSelectedImageName("");
    setTimeout(() => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, 1);
  };

  const handleReceiveMessage = (receivedMessage) => {
    const receivedComment = {
      key: 34,
      CompanyName: "Other Company",
      message: receivedMessage,
      timestamp: new Date().getTime(), // Add timestamp property
      // Other properties...
    };

    setMessages([...messages, receivedComment]);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Selected Image Data:", file);
    setSelectedImage(file);
    setSelectedImageName(file.name);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleMessageSubmit();
    }
  };

  const sendMs = async (user, selectedChat) => {
    try {
      // Make an API call to send the message
      const response = await axios.post("/api/sendMessage", {
        user,
        selectedChat,
        message: messageinput,
      });
      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const getDateDisplay = () => {
    const today = moment();
    const messageDate = moment(comment.timestamp);

    if (today.isSame(messageDate, "day")) {
      return "Today";
    } else if (today.clone().subtract(1, "day").isSame(messageDate, "day")) {
      return "Yesterday";
    } else {
      return messageDate.format("DD/MM/YYYY");
    }
  };

  // useEffect(()=>{

  //   if(window.innerWidth > 660){
  //     setClicked(true)
  //   }else{
  //     setClicked(false)

  //   }
  // },[window.innerWidth])

  return (
    <div className=" sticky top-[105px]    mt-4 ">
      <div className=" flex  rounded-[12px]  z-[-1]  border-2  ">
        <div className="  sm:block mb-4  w-full lg:w-[350px]  bg-[#F8F8F8] border-2  ">
          <div className="flex items-center pl-10 h-[78px]  gap-2 ">
            <AiFillMessage className="text-4xl text-[#5E5E5E]" />
            <div className="">
              <p className="text-xl text-[#5E5E5E] font-bold">Your Messages</p>
              <p className="text-[13px] text-[#00000075] font-bold">
                Stay connected!
              </p>
            </div>
          </div>
          <hr className="border-[1px]" />
          <div className=" ml-3 flex gap-4  items-center">
            <div className="  h-12 flex gap-2 border-[1px] rounded-md   ml-2  mt-5  bg-[#FFFFFF]   px-2 items-center min-w-[150px] ">
              <div>
                <FiSearch className="text-xl text-gray-500 " />
              </div>
              <input
                className=" outline-none text-[15px] "
                type="text"
                value={chatInput}
                placeholder="Search"
                onChange={(e) => {
                  setChatInput(e.target.value);
                }}
              />
            </div>

            <div className=" mt-4 border-2 bg-[#FFFFFF] rounded-full w-8 h-8 p-1 ">
              <AiOutlinePlus className="text-xl  " />
            </div>
          </div>

          <div className="gap-2 w-full lg:w-[350px] p-1 mt-8   ">
            <div
              className={`flex flex-col gap-4 overflow-y-scroll h-[440px] overflow-hidden ${
                activeLink === "selectedChat" ? "bg-[#F8F8F8]" : "bg-[ ]"
              }`}
            >
              {Chat.filter((item) =>
                item.title.toLowerCase().includes(chatInput.toLowerCase())
              ).map((chat) => (
                <ChatCard
                  key={chat.key}
                  title={chat.title}
                  image={chat.image}
                  time={chat.time}
                  AmoutOfmessage={chat.AmoutOfmessage}
                  description={chat.description}
                  onSelect={() => handleChatSelect(chat)}
                  isActive={selectedChat === chat}
                />
              ))}
            </div>
          </div>
        </div>

        {clicked  && <div className={`${clicked? "absolute w-full  lg:w-660px ":" hidden  w-full lg:max-w-[610px] md:w-[510px]  h-[450px]  border-2 border-yellow-800  "}`}>
          {selectedChat ? (
            newChat ? (
              <div className=" max-w-[610px] bg-[#FFFFFF]   flex flex-col justify-between  ">
                <div className="flex gap-2 items-center h-[78px] ml-4">
                  <BsArrowLeftShort className=" text-4xl sm:hidden" onClick={()=>setClicked(false)} />
                  <Avatar img={selectedChat.image} />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-[#000] text-[17px]">
                      {selectedChat.title}
                    </h1>
                    <p className="text-green-500">
                      {selectedChat.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>

                <hr className="border-[1px]" />
                <div
                  ref={containerRef}
                  className=" rounded-md flex flex-col px-4 mx-[1px] h-[465px]  max-h-[500px]   bg-[#FFFFFF] mt-2 overflow-y-scroll overflow-x-hidden gap-2  "
                >
                  {chatData.map((comment, index) => (
                    <>
                      <div className="px-4 py-2">
                        <p className="text-gray-500 text-xs text-center">
                          {moment(comment.timestamp).calendar(null, {
                            sameDay: "[Today]",
                            lastDay: "[Yesterday]",
                            lastWeek: "DD/MM/YYYY",
                            sameElse: "DD/MM/YYYY",
                          })}
                        </p>
                      </div>

                      <div
                        key={index}
                        className={`mb-2 ${
                          comment.fromOther ? "justify-start" : "justify-end"
                        } flex gap-2`}
                      >
                        {comment.fromOther && (
                          <div className="w-12 h-10 rounded-full  ">
                            <div>
                              {" "}
                              <img
                                src={comment.image}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        )}

                        <div className="">
                          <div className="flex">
                            <div className="w-full flex flex-col">
                              <h4
                                className={`font-semibold text-lg  ${
                                  comment.fromOther ? "text-left" : "text-right"
                                }`}
                              >
                                {comment.CompanyName}
                              </h4>
                              <p
                                className={`font-bold p-2 border-2 ${
                                  comment.fromOther
                                    ? "text-left bg-[#FFFFFF] rounded-r-lg"
                                    : "  bg-[#ddedfb] text-right rounded-l-lg"
                                }`}
                                style={{
                                  borderBottomRightRadius: "10px",
                                  borderBottomLeftRadius: "10px",
                                }}
                              >
                                <span className="font-normal">
                                  {comment.message}
                                </span>
                                <p className="text-right text-[10px]">
                                  {new Date(
                                    comment.timestamp
                                  ).toLocaleTimeString()}
                                </p>
                              </p>

                              {comment.fromOther && (
                                <div
                                  className={`${
                                    !comment.fromOther
                                      ? "flex mr-10 "
                                      : "hidden"
                                  }`}
                                >
                                  <img
                                    src={comment.Photo}
                                    alt=""
                                    className="mt-8 rounded-lg w-52 h-40 object-cover"
                                    
                                  />
                                  
                                </div>
                              )}
                            </div>

                            {!comment.fromOther && (
                              <div className="">
                                <img
                                  src={CuteGirl}
                                  alt=""
                                  className="w-12  h-10 rounded-full object-cover"
                                />
                              </div>
                            )}
                          </div>

                          {/* Attatchment Image Placeholder, Always hidden untill image is attatched */}
                          <div
                            className={`${
                              !comment.fromOther
                                ? "flex justify-end mr-4  "
                                : "hidden"
                            }`}
                          >
                            {comment.attachement && (
                              <img
                                className="mt-2 rounded-lg w-52 h-40 object-cover"
                                src={URL.createObjectURL(comment.attachement)}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </>
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
                <div className="flex bg-gray-100  items-center  gap-2  ">
                  <div className=" mr-1   ml-2 flex justify-center items-center">
                    <BsEmojiSmile className="text-xl" />
                  </div>
                  <textarea
                    name="message"
                    value={messageinput}
                    className="w-full bg-transparent justify-center items-center    mt-3 outline-none resize-none"
                    placeholder="Type your message..."
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  ></textarea>
                  <div className=" items-center">
                    {selectedImage ? (
                      <div className=" flex gap-2 items-center">
                        <div className="w-12">
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected File"
                            className="w-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => setSelectedImage(null)}
                          className=" bg-red-200 px-2 py-2 rounded-md"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <label htmlFor="file" className="cursor-pointer">
                          <ImAttachment className="text-xl mx-2" />
                        </label>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </>
                    )}

                    {/* {selectedImageName && <p>{selectedImageName}</p>} */}
                  </div>
                  {/* Vertical line */}
                  <div className=" w-1 h-8 bg-gray-300"></div>{" "}
                  <div
                    className="bg-whit flex items-center gap-3 border"
                    onClick={handleMessageSubmit}
                  >
                    Send
                    <BiLogoTelegram className="  text-xl text-[#555555] mr-3" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center  bg-white h-screen align-middle mt-[-132px] lg:w-[660px] ">
                {/* <button className="absolute top-0 left-2 px-4 py-2 bg-gray-300"  onClick={()=>setClicked(false)}>back</button> */}
                <BsArrowLeftShort className=" text-[80px] absolute top-0 left-2 px-4 py-2 text-black " onClick={()=>setClicked(false)} />
                <div className="sm:p-6 border-2 border-blue-900 rounded-full">
                  <img src={messagelogo} alt=""></img>
                </div>
                <p className="text-[15px] font-semibold mb-4">
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
                <img src={messagelogo} alt=""></img>
              </div>
              <p className="text-[15px] font-semibold my-3">
                Select a Chat to Start Messaging!
              </p>
            </div>
          )}
        </div>}
      </div>
    </div>
  );
}

export default ChatPage;
