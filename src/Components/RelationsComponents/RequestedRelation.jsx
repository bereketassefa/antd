import React from "react";
import image1 from "../../assets/image/BRUHWAY-HOTEL.png";
import image2 from "../../assets/image/bbm-.png";
import image3 from "../../assets/image/BT.png";
import image4 from "../../assets/image/STARTIMES.png";


function RequestedRelation() {
  return (
  

    <div className="flex flex-col  gap-4 mx-auto pb-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center border-[1px] border-[#3222C6]   px-4  ">
        <div className=" justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[55px] h-[55px]  object-cover "
            src={image1}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px] ">
            Company Name
          </h2>
        </div>

        <div className="flex gap-4 py-4 items-center">
          <button className="bg-[#D71A62] w-[125px] h-[39px]  text-white">
            Accept
          </button>
          <button className="w-[131px] h-[39px] text-[#D71A62] border-2  border-[#D71A62]">
            Decline
          </button>
          <p className="hidden lg:block">28 min</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center border-[1px] border-[#3222C6]   px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image2}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <div className="flex gap-4 py-4 items-center">
          {" "}
          <button className="bg-[#D71A62] w-[125px] h-[39px]  text-white">
            Accept
          </button>
          <button className="w-[131px] h-[39px] text-[#D71A62] border-2  border-[#D71A62]">
            Decline
          </button>
          <p className="hidden md:hidden lg:block">28 min</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center border-[1px] border-[#3222C6]  px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image3}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <div className=" flex gap-4 py-4 items-center">
          <button className="bg-[#D71A62] w-[125px] h-[39px]  text-white">
            Accept
          </button>
          <button className="w-[131px] h-[39px] text-[#D71A62] border-2  border-[#D71A62]">
            Decline
          </button>
          <p className="hidden lg:block">28 min</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center border-[1px] border-[#3222C6]   px-4 ">
        <div className=" justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image4}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <div className=" flex gap-4 py-4 items-center">
          <button className="bg-[#D71A62] w-[125px] h-[39px]  text-white">
            Accept
          </button>

          <button className="w-[131px] h-[39px] text-[#D71A62] border-2  border-[#D71A62]">
            Decline
          </button>
          <p className="hidden lg:block">28 min</p>
        </div>
      </div>
    </div>
  );
}

export default RequestedRelation;
