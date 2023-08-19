import React from "react";
import { Link } from "react-router-dom";
import { BsWalletFill } from "react-icons/bs";
import { AiFillHome, AiFillCloud } from "react-icons/ai";
function SearchNav() {
  return (
    <div className="flex flex-col bg-[#F9F7F7]  text-[#000000]  mt-5 w-[265px] ">
      <ul className=" space-y-4 gap-4 mt-4">
        <Link to="All" className="text-gray-700">
          <li className="cursor-pointer w-full flex items-center gap-2">
            <BsWalletFill />
            <p className="text-smallP md:text-midP lg:text-largeP ">All</p>
          </li>
        </Link>
        <Link to="Company" className="text-gray-700">
          <li className="cursor-pointer w-full flex items-center gap-2">
            <AiFillHome />
            <p className="text-smallP md:text-midP lg:text-largeP ">Company</p>
          </li>
        </Link>
        <Link to="Demand Product" className="text-gray-700">
          <li className="cursor-pointer w-full flex items-center gap-2">
            <AiFillCloud />
            <p className="text-smallP md:text-midP lg:text-largeP ">
              Demand Product
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SearchNav;
