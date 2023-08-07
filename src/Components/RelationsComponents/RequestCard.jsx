import React from "react";

function RequestCard({ title, image }) {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className=" flex items-center justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image}
            alt="Compang Name"
          />
          <h1 className=" font-bold text-[#000] text-center text-[17px]">
            {title}
          </h1>
        </div>

        <button className="bg-[#D71A62] w-[125px] h-[39px]  text-white">
          Accept
        </button>
        <button className="w-[131px] h-[39px] text-[#D71A62] border-2  border-[#D71A62]">
          Decline
        </button>
        <p>28 min</p>

        
      </div>
    </div>
  );
}

export default RequestCard;
