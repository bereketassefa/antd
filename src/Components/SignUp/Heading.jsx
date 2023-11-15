import React from "react";
import image from "../../assets/image/addissystems-logo.png";
const Heading = ({ text, Title }) => {
  return (
    <div className="md:mb-0  mb-6">
      <h1 className="text-[24px]  md:text-[24px] lg:text-[35px] font-semibold md:font-bold
       text-left md:text-center lg:text-left text-white md:text-[#3222C6] mb-2 sm:mb-0">
        {Title}
      </h1>
      <p className="text-lg text-[12px] font-semibold md:text-[20px] text-left mt-[-10px]
       md:text-center lg:text-left text-[#B7B7B7]">{text}</p>
    </div>
  );
};

export default Heading;
