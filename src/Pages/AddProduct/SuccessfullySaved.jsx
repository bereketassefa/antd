import React from "react";
import right from "../../assets/image/right.png";
function SuccessfullySaved() {
  return (
    <div className="  pl-10  pt-4 flex  flex-col justify-center items-center w-[400px] h-[350px] ">
      <div className="   items-center rounded-full ring-[40px] ring-[#f4f2f2] flex justify-center ">
        <img src={right} alt="" className="flex justify-center items-center"></img>
      </div>
      <p className="flex justify-center text-xl font-bold mt-14">
        SuccessfullySaved
      </p>
    </div>
  );
}

export default SuccessfullySaved;
