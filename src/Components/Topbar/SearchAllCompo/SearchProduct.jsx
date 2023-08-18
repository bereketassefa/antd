import React, { useState } from "react";
// import image1 from "../../assets/image/BRUHWAY-HOTEL.png";
// import image2 from "../../assets/image/bbm-.png";
// import image3 from "../../assets/image/BT.png";
// import image4 from "../../assets/image/STARTIMES.png";
import { RiArrowDropDownLine } from "react-icons/ri";
function SearchProduct() {
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
            Product A
          </h2>
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
            Product B
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center  px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image3}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px]">
            Product C
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center  px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image4}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px]">
            Product E
          </h2>
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
            Product G
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center  px-4 ">
        <div className="justify-start flex items-center lg:justify-center gap-2 ">
          <img
            className="w-[59px] h-[59px]  object-cover "
            src={image1}
            alt="Compang Name"
          />
          <h2 className=" font-bold text-[#000] text-center text-[17px]">
            Product
          </h2>
        </div>
      </div>
      <a href="" className="flex flex-col justify-center items-center mb-4">
        <p className="flex justify-center text-[#3222C6]">See More</p>
        <div className="h-1 w-12 bg-[#3222C6] "></div>
      </a>
    </div>
  );
}

export default SearchProduct;
