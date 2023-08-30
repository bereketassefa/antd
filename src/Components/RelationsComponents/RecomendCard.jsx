import React from 'react'

const RecomendCard=({title,image ,button, h1 , icon })=> {
  return (
    <div className="">
      <div className=" flex-col items-center justify-center mb-4 ">
        <img
          src={image}
          alt="Compang Name"
          className="w-[78px] md:w-[78px] lg:w-full object-cover"
        />
        <h2 className="  font-bold text-[#000] text-center text-[17px]">
          {title}
        </h2>
      </div>
      <div className="flex justify-center">
        <button className="  bg-[#D71A62] w-[125px] h-[39px] flex justify-center items-center  text-white">
         { icon} { h1}
        </button>
      </div>
    </div>
  );
}

export default RecomendCard

