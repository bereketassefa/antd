// import React, { useState } from "react";
// import { MdWork } from "react-icons/md";

// const JabCard = ({ key, Name, position, Description, Para }) => {
//   const [showText, setShowText] = useState(false);
//   const handleToggleText = () => {
//     setShowText(!showText);
//   };

//   return (
//     <div className="p-4" key={key}>
//       <div className="flex items-center gap-2">
//         <MdWork className="text-2xl" />
//         <p className="text-xl">{Name}</p>
//       </div>
//       <h1 className="text-xl font-bold">{position}</h1>
//       <div className="flex justify-between items-center">
//         <h3 className="text-[] font-bold">{Description}</h3>
//         <div className="p-2 flex w-full justify-center items-center">
//           {!showText && (
//             <p
//               className={`md:mt-6 text-[15px] ${
//                 showText ? "hidden" : "text-blue-900"
//               }`}
//               onClick={handleToggleText}
//             >
//               see more
//             </p>
//           )}
//         </div>
//       </div>
//       <p className="border-2 border-red-600 max-h-14  overflow-y-hidden ">{Para}</p>
//       <hr className="border-[1px] w-[800px]" />
//     </div>
//   );
// };

// export default JabCard;
import React, { useState } from "react";
import { MdWork } from "react-icons/md";

const JabCard = ({ key, Name, position, Description, Para }) => {
  const [showText, setShowText] = useState(false);

  const handleToggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="p-4" key={key}>
      <div className="flex items-center gap-2">
        <MdWork className="text-2xl" />
        <p className="text-xl">{Name}</p>
      </div>
      <h1 className="text-xl font-bold">{position}</h1>
      <div className="flex justify-between items-center">
        <h3 className="text-[] font-bold">{Description}</h3>
        <div className="p-2 flex w-full justify-center items-center">
          {!showText && (
            <p
              className={`md:mt-6 text-[15px] ${
                showText ? "hidden" : "text-blue-900"
              }`}
              onClick={handleToggleText}
            >
              see more
            </p>
          )}
        </div>
      </div>
      <p
        className={`bord ${
          showText ?" h-auto overflow-hidden"
                : "max-h-12 overflow-hidden"
        }`}
      >
        {Para}
      </p>
      <hr className="border-[1px]  w-[800px]" />
    </div>
  );
};

export default JabCard;


