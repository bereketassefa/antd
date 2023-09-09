import React, { useState } from "react";
import { MdOutlineAddTask, MdPersonAddAlt1 } from "react-icons/md";
import { Search } from "../../../data";
import Avatar from "../../../Fields/Avatar/avatar";
import Button from "../../../Fields/Button/button";
function SearchCompany() {
  const [filter, setFilter] = useState("");

  return (
    <div className=" border-gray-300 max-w-[780px] md:w-[780px] rounded-md shadow-lg">
      <div className=" flex justify-between items-center   px-4 ">
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

      {Search?.filter((item) =>
        filter === "accepted"
          ? item.isAccepted == true
          : filter === "" || filter == "all"
          ? item
          : filter == "connected"
          ? item.isConnected == true && item.isAccepted == true
          : null
      )?.map((search, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between md:items-center   px-4 "
          >
            <div className="justify-start flex items-center lg:justify-center gap-2 ">
              <Avatar img={search.image} />
              <h2 className=" font-bold text-[#000] text-center text-[17px] ">
                {search.title}
              </h2>
            </div>

            <div className=" flex gap-4 py-4 items-center">
              {search.isAccepted === false ? (
                <div className="flex gap-4">
                  <Button text={"Accept"} filled color="[#D71A62]" />
                  <Button text={"Decline"} color="[#D71A62]" />
                </div>
              ) : (
                <div>
                  <Button
                    text={search.isConnected ? "Connected" : "Connect"}
                    icon={
                      search.isConnected ? (
                        <MdOutlineAddTask />
                      ) : (
                        <MdPersonAddAlt1 />
                      )
                    }
                    iconPossition="left"
                    color="[#D71A62]"
                    filled={search.isConnected ? false : true}
                    onClick={null}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}

      <a href="" className="flex flex-col justify-center items-center pb-4">
        <p className="flex justify-center text-[#3222C6]">See More</p>
        <div className="h-1 w-12 bg-[#3222C6] "></div>
      </a>
    </div>
  );
}

export default SearchCompany;
