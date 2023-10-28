
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
      <div className="">
        <h3 className="text-[] font-bold">{Description}</h3>
      </div>
      <p
        className={`bord ${
          showText ? " h-auto overflow-hidden" : "max-h-12 overflow-hidden"
        }`}
      >
        {Para}
      </p>
      <div className="  mt-[-5px] flex w-full justify-end items-center">
        {!showText && (
          <p
            className={`  text-[15px] ${
              showText ? "hidden" : "text-blue-900"
            }`}
            onClick={handleToggleText}
          >
            see more
          </p>
        )}
      </div>
      <hr className="border-[1px]  w-[800px]" />
    </div>
  );
};

export default JabCard;


