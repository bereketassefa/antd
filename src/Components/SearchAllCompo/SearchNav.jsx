import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BsWalletFill } from "react-icons/bs";
import { AiFillHome, AiFillCloud } from "react-icons/ai";
function SearchNav() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className=" border-gray-300  rounded-md shadow-lg bg-[#FFF] text-[#000000]   ">
      <ul className=" md:w-[300px] max-w-[400px] flex  justify-between flex-row md:flex-col  ml-6 gap-4 mt-4">
        <Link
          to="/feed/SearchNav/All"
          className={`${
            activeLink === "All" ? "text-[#3222C6] " : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("All")}
        >
          <li
            className="
            cursor-pointer w-full flex items-center gap-3 "
          >
            <BsWalletFill
              className={`${
                activeLink === "All" ? "text-[#3222C6]" : "text-gray-700"
              }text-2xl`}
            />
            <p className=" font-normal text-xl ">All</p>
          </li>
        </Link>
        <Link
          to="/feed/SearchNav/Company"
          className={`${
            activeLink === "Company" ? "text-[#3222C6] " : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("Company")}
        >
          <li
            className={`${
              activeLink === "Company" ? "bg-slate-300" : " "
            }cursor-pointer w-full flex items-center gap-3 `}
          >
            <AiFillHome
              className={` ${
                activeLink === "Company" ? "text-[#3222C6]" : "text-gray-700"
              }text-2xl`}
            />
            <p className="font-normal text-xl ">Company</p>
          </li>
        </Link>
        <Link
          to="/feed/SearchNav/SearchProduct"
          className={`${
            activeLink === "Demand Product"
              ? "text-[#3222C6] "
              : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("Demand Product")}
        >
          <li
            className={`${
              activeLink === "Demand Product" ? "bg-slate-300" : " "
            }cursor-pointer w-full flex items-center gap-3`}
          >
            <AiFillCloud
              className={`${
                activeLink === "Demand Product"
                  ? "text-[#3222C6]"
                  : "text-gray-700"
              }text-2xl `}
            />
            <p className="font-normal text-xl ">Demand Product</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SearchNav;
