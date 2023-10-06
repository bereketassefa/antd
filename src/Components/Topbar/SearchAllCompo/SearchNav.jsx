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
    <div className="dark:bg-[#1b1f23]  sticky top-[105px] rounded-md     mt-4h-[60px] md:h-[200px] text-[#000000] bg-white drop-shadow-xl  ">
      <ul className="   md:w-[220px] max-w-[400px] flex  justify-between flex-row md:flex-col  ml-6 gap-4 ">
        <Link
          to={`/feed/SearchNav/${name}`}
          className={`${
            activeLink === "All" ? "text-[#3222C6] " : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("All")}
        >
          <li
            className="dark:text-white
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
            activeLink === "Company" ? "text-[#3222C6] " : "text-gray-700 dark:text-white"
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
              }text-2xl dark:text-white `}
            />
            <p className="font-normal text-xl dark:text-white ">Products</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SearchNav;
