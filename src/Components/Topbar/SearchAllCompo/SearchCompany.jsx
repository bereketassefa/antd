import React, { useState } from "react";
import image1 from "../../assets/image/BRUHWAY-HOTEL.png";
import image2 from "../../assets/image/bbm-.png";
import image3 from "../../assets/image/BT.png";
import image4 from "../../assets/image/STARTIMES.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAddTask, MdPersonAddAlt1 } from "react-icons/md";
function SearchCompany() {
  const [selectDroped, setSelectDroped] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between items-center   px-4 ">
        <h1 className="text-xl font-bold ">Search result</h1>
        <div className="flex justify-center items-center  gap-4">
          <p>Sort By:</p>
          <button
            className="relative bg-white ] border-2  border-[#3222C6] "
            onClick={() => setSelectDroped(!selectDroped)}
          >
            <div className="flex justify-between  mx-8 items-center   ">
              <p className="text-gray-400">Select</p>
              <RiArrowDropDownLine className="text-4xl " />
            </div>
            {selectDroped && (
              <div className="absolute right-0 mt-2 w-40% bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">Accept</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Decline</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Connected</li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center   px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image1}
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
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center  px-4 ">
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

        <button className=" flex justify-center items-center gap-2 w-[131px] h-[39px] text-[#D71A62] border-2  border-[#D71A62]">
          <MdOutlineAddTask /> Connected
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center  px-4 ">
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

        <button className=" flex justify-center items-center gap-2 w-[131px] h-[39px] bg-[#D71A62] border-2  text-white">
          <MdPersonAddAlt1 /> Connect
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center  px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
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
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center px-4 ">
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

        <button className=" flex justify-center items-center gap-2 w-[131px] h-[39px] text-[#D71A62] border-2  border-[#D71A62]">
          <MdOutlineAddTask /> Connected
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center  px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image1}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px]">
            Company Name
          </h2>
        </div>

        <button className=" flex justify-center items-center gap-2 w-[131px] h-[39px] bg-[#D71A62] border-2  text-white">
          <MdPersonAddAlt1 /> Connect
        </button>
      </div>
      <a href="" className="flex flex-col justify-center items-center mb-4">
        <p className="flex justify-center text-[#3222C6]">See More</p>
        <div className="h-1 w-12 bg-[#3222C6] "></div>
      </a>
    </div>
  );
}

export default SearchCompany;
