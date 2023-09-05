import React, { useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Search } from "../../../data";
import Avatar from "../../../Fields/Avatar/avatar";

function SearchProduct() {
  const [selectDroped, setSelectDroped] = useState(false);
  return (
    <div className=" bg-white drop-shadow-xl">
      <div className="flex justify-between items-center   px-4 ">
        <h1 className="text-xl font-bold ">Search result</h1>
        <div className="flex justify-center items-center  gap-4">
          <p>Sort By:</p>
          <select
            className=" border-2 p-2 border-blue-800 outline-none  "
            placeholder="Select"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value={"all"}>All</option>
            <option value={"accepted"}>Accepted</option>
            <option value={"connected"}>Connected</option>
            <option value={"declined"}>Declined</option>
          </select>
        </div>
      </div>

      {Search.map((items) => {
        return (
          <div className="flex flex-col md:flex-row justify-between md:items-center   px-4 ">
            <div className="justify-start flex items-center lg:justify-center gap-2 ">
              <Avatar img={items.image} />
              <h2 className=" font-bold text-[#000] text-center text-[17px] ">
                {items.title}
              </h2>
            </div>
          </div>
        );
      })}

      <a href="" className="flex flex-col justify-center items-center pb-8">
        <p className="flex justify-center text-[#3222C6]">See More</p>
        <div className="h-1 w-12 bg-[#3222C6]" />
      </a>
    </div>
  );
}

export default SearchProduct;
