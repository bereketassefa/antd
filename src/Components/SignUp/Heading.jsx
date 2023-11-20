import React from "react";
import image from "../../assets/image/addissystems-logo.png";
const Heading = ({ text, Title }) => {
  return (
    <div className="lg:mb-10  mb-6 md:mb-10">
      <h1 className="text-[24px]  md:text-[42px] lg:text-[40px] font-semibold md:font-bold
       text-left  lg:text-left text-white lg:text-[#3222C6] mb-2 md:mb-2 md:w-[100%] sm:mb-0">
        {Title}
      </h1>
      <p className="text-[12px] md:text-[18px] lg:text-[20px] font-semibold text-left mt-[-10px]
        lg:text-left text-[#B7B7B7]">{text}</p>
    </div>
  );
};

export default Heading;
