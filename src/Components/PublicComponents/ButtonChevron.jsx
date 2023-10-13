import React from "react";
import { HiChevronRight } from "react-icons/hi";

const ButtonChevron = ({ text, width, px, py }) => {
  return (
    <button
      className=" group mx-auto flex items-center justify-center rounded-[4px] bg-addispink px-6 py-[10px] text-white duration-300 hover:bg-[#F60B65] sm:mx-0 "
      style={{
        width: `${width}px`,
        padding: `${py}px  ${px}px`,
      }}
    >
      {/* {console.log(text)} */}
      {text}{" "}
      <HiChevronRight className="mt-1 text-xl  duration-500 group-hover:visible group-hover:translate-x-2 group-hover:scale-125 group-hover:opacity-100 " />
    </button>
  );
};

ButtonChevron.defaultProps = {
  py: 10,
  px: 24,
};

export default ButtonChevron;
