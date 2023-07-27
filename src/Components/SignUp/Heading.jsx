import React from "react";
import image from "../../assets/image/addissystems-logo.png";
const Heading = ({ text, Title }) => {
  return (
    <div className="">
      <h1 className="text-[35px] font-bold text-center lg:text-left">
        {Title}
      </h1>
      <p className="text-lg text-center lg:text-left text-[#B7B7B7]">{text}</p>
    </div>
  );
};

export default Heading;
