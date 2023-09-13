import { React, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { BsWalletFill } from "react-icons/bs";
import { AiFillHome, AiFillCloud } from "react-icons/ai";
function SearchNav() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const { name } = useParams();



  return (
    <div className="   rounded-md shadow-lg  h-[200px] text-[#000000] bg-white drop-shadow-xl  ">
      <ul className="   md:w-[220px] max-w-[400px] flex  justify-between flex-row md:flex-col  ml-6 gap-4 mt-4">
        <Link
          to={`/feed/SearchNav/${name}`}
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
          to={`/feed/SearchNav/${name}/party`}
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
          to={`/feed/SearchNav/${name}/Product`}
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
            <p className="font-normal text-xl ">Products</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SearchNav;
