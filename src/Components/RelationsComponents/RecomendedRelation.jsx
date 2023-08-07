import React from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import image1 from "../../assets/image/BRUHWAY-HOTEL.png";
import image2 from "../../assets/image/bbm-.png";
import image3 from "../../assets/image/BT.png";
import image4 from "../../assets/image/STARTIMES.png";
function RecomendedRelation() {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex-col  p-4 justify-center items-center w-[185px] h-[194px] border-2 border-blue-800 ">
        <div className=" flex-col items-center justify-center mb-4 ">
          <img
            className=" ml-12 w-[59px] h-[59px]  justify-center items-center object-cover "
            src={image1}
            alt="Compang Name"
          />
          <h2 className=" mt-2 font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <div className="flex justify-center">
          <button className="  bg-[#D71A62] w-[125px] h-[39px] flex justify-center items-center  text-white">
            <BsFillPersonPlusFill /> Accept
          </button>
        </div>
      </div>
      <div className="flex-col  p-4 justify-center items-center w-[185px] h-[194px] border-2 border-blue-800 ">
        <div className=" flex-col items-center justify-center mb-4 ">
          <img
            className=" ml-12 w-[59px] h-[59px]  justify-center items-center object-cover "
            src={image2}
            alt="Compang Name"
          />
          <h2 className=" mt-2 font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <div className="flex justify-center">
          <button className="  bg-[#D71A62] w-[125px] h-[39px] flex justify-center items-center  text-white">
            <BsFillPersonPlusFill /> Accept
          </button>
        </div>
      </div>
      <div className="flex-col  p-4 justify-center items-center w-[185px] h-[194px] border-2 border-blue-800 ">
        <div className=" flex-col items-center justify-center mb-4 ">
          <img
            className=" ml-12 w-[59px] h-[59px]  justify-center items-center object-cover "
            src={image3}
            alt="Compang Name"
          />
          <h2 className=" mt-2 font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <div className="flex justify-center">
          <button className="  bg-[#D71A62] w-[125px] h-[39px] flex justify-center items-center  text-white">
            <BsFillPersonPlusFill /> Accept
          </button>
        </div>
      </div>
       <div className="flex-col  p-4 justify-center items-center w-[185px] h-[194px] border-2 border-blue-800 ">
        <div className=" flex-col items-center justify-center mb-4 ">
          <img
            className=" ml-12 w-[59px] h-[59px]  justify-center items-center object-cover "
            src={image4}
            alt="Compang Name"
          />
          <h2 className=" mt-2 font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <div className="flex justify-center">
          <button className="  bg-[#D71A62] w-[125px] h-[39px] flex justify-center items-center  text-white">
            <BsFillPersonPlusFill /> Accept
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default RecomendedRelation;
