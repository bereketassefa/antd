// import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { ImAttachment } from "react-icons/im";
// import { BiLogoTelegram } from "react-icons/bi";
// import Avatar from "../../Fields/Avatar/avatar";

// const MessageCard = ({
//   title,
//   image,
//   description,
//   onSelect,
//   ActiveTime,
//   time,
// }) => {
//   const [showMessage, setShowMessage] = useState(false);
//   const [message, setMessage] = useState("");
//   const [sentMessages, setSentMessages] = useState(
//     JSON.parse(localStorage.getItem("sentMessages")) || []
//   );

//   const handleSend = () => {
//     // Perform your desired logic for sending the message
//     console.log(message);

//     // Store the sent message locally
//     const newSentMessages = [...sentMessages, message];
//     setSentMessages(newSentMessages);
//     localStorage.setItem("sentMessages", JSON.stringify(newSentMessages));

//     // Clear the message input after sending
//     setMessage("");
//   };

//   return (
//     <div className="gap-4 hover:bg-slate-200 p-2" onClick={onSelect}>
//       <div className="flex items-center justify-between gap-2">
//         <div className="flex items-center">
//           <Avatar img={image} />
//           <div>
//             <p className="font-bold text-[#000] text-center text-[17px]">
//               {title}
//             </p>
//             <p className="ml-3">{ActiveTime}</p>
//           </div>
//         </div>

//         <div>
//           <p className="text-[#000] text-[15px]">{time}</p>
//           <div className="flex items-center w-[120px]">
//             <p onClick={() => setShowMessage(!showMessage)}>
//               {showMessage ? "Show Less" : "Replay"}
//             </p>{" "}
//             <RiArrowDropDownLine
//               className={`text-4xl mt-2 ${
//                 showMessage ? "rotate-180" : "rotate-0"
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//       {showMessage && (
//         <div className="overflow-y-scroll">
//           <div className="border-2 bg-[#EFEDFA]">
//             <p className="ml-3">{description}</p>
//             <p>local message </p>
//           </div>
//           <div className="flex items-center border-2 mt-8 px-2 bg-slate-50">
//             <textarea
//               className="resize-none border rounded-md p-2 w-full outline-none"
//               rows={2}
//               placeholder="Type here..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>

//             <div>
//               <ImAttachment className="text-xl mx-5" />
//             </div>
//             <div
//               className="bg-purple-300 flex items-center gap-3 rounded-lg py-1 px-3 cursor-pointer"
//               onClick={handleSend}
//             >
//               Send
//               <BiLogoTelegram className="text-xl" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MessageCard;

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { BiLogoTelegram } from "react-icons/bi";
import Avatar from "../../Fields/Avatar/avatar";

const MessageCard = ({
  title,
  image,
  description,
  onSelect,
  ActiveTime,
  time,
}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [localMessage, setLocalMessage] = useState("");

  const handleSend = () => {
    // Perform your desired logic for sending the message
    console.log(message);

    // Store the sent message locally
    setLocalMessage(message);

    // Clear the message input after sending
    setMessage("");
  };

  return (
    <div className="gap-4 hover:bg-slate-200 p-2" onClick={onSelect}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <Avatar img={image} />
          <div>
            <p className="font-bold text-[#000] text-center text-[17px]">
              {title}
            </p>
            <p className="ml-3">{ActiveTime}</p>
          </div>
        </div>

        <div>
          <p className="text-[#000] text-[15px]">{time}</p>
          <div className="flex items-center w-[120px]">
            <p onClick={() => setShowMessage(!showMessage)}>
              {showMessage ? "Show Less" : "Replay"}
            </p>{" "}
            <RiArrowDropDownLine
              className={`text-4xl mt-2 ${
                showMessage ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="overflow-y-scroll">
          <div className="border-2 bg-[#EFEDFA] ">
            <p className="ml-3">{description}</p>
            {localMessage && <p>{localMessage}</p>}
          </div>
          <div className="flex items-center border-2 mt-8 px-2 bg-slate-50">
            <textarea
              className="resize-none border rounded-md p-2 w-full outline-none"
              rows={2}
              placeholder="Type here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div>
              <ImAttachment className="text-xl mx-5" />
            </div>
            <div
              className="bg-purple-300 flex items-center gap-3 rounded-lg py-1 px-3 cursor-pointer"
              onClick={handleSend}
            >
              Send
              <BiLogoTelegram className="text-xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageCard;

