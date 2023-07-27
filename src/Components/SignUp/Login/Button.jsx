import React from "react";

export default function Button({ text, bgColor, disabled, onClick, hover }) {
  return (
    <>
      <button
        className={` mt-10 mb-7 rounded-[3px]  w-full uppercase text-[20px] font-medium p-2 text-white duration-500 ${bgColor} `}
        type="submit"
        disabled={disabled}
        onClick={onClick}
        hover={disabled}
      >
        {text}
      </button>
    </>
  );
}
