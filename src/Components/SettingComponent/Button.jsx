import React from "react";

export default function Button({ text, bgColor, disabled, onClick,  }) {
  return (
    <>
      <button
        className={` mt-10 mb-7  w-[100px] uppercase text-[20px] font-medium p-2 text-white duration-500 ${bgColor} `}
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
