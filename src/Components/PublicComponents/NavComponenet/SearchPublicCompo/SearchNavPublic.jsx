import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SearchNavPublic() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const { searchInput } = useParams();

  return (
    <div className="dark:bg-[#1b1f23]  sticky top-[85px] rounded-md md:h-[350px] text-[#000000] bg-white drop-shadow-xl  border-2 ">
      <p className="  text-xl font-bold my-6 ml-3 ">Filter Result</p>
      <ul className=" md:w-[220px] max-w-[400px] flex  justify-between flex-row md:flex-col  ml-6 gap-2 mt-4 ">
        <Link
          to={`/Search/All/${searchInput}`}
          className={`${
            activeLink === "All" ? "text-[#3222C6] " : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("All")}
        >
          <li
            className="dark:text-white
            cursor-pointer w-full flex  items-center gap-2  "
          >
            <div
              className={`${
                activeLink === "All" ? "block" : "hidden"
              } w-[6px] rounded-r-lg bg-[#3222C6] h-8`}
            ></div>
            <p className=" font-normal text-[20px] ">All</p>
          </li>
        </Link>
        <hr />
        <Link
          to={`/Search/${searchInput}/companies`}
          className={`${
            activeLink === "Company"
              ? "text-[#3222C6] "
              : "text-gray-700 dark:text-white"
          } `}
          onClick={() => handleLinkClick("Company")}
        >
          <li
            className={`${
              activeLink === "Company" ? "bg-slate-300" : " "
            }cursor-pointer w-full flex items-center gap-2  `}
          >
            <div
              className={`${
                activeLink === "Company" ? "block" : "hidden"
              } w-[6px] rounded-r-lg bg-[#3222C6] h-8`}
            ></div>
            <p className="font-normal text-[20px] ">Company</p>
          </li>
        </Link>
        <hr />
        <Link
          to={`/Search/${searchInput}/Product`}
          className={`${
            activeLink === "Product" ? "text-[#3222C6] " : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("Product")}
        >
          <li
            className={`${
              activeLink === "Product" ? "bg-slate-300" : " "
            }cursor-pointer w-full flex items-center gap-2 `}
          >
            <div
              className={`${
                activeLink === "Product" ? "block" : "hidden"
              } w-[6px] rounded-r-lg bg-[#3222C6] h-8`}
            ></div>
            <p className="font-normal text-[20px] dark:text-white ">Products</p>
          </li>
        </Link>
        <hr />
        <Link
          to={`/Search/${searchInput}/Job`}
          className={`${
            activeLink === "Job" ? "text-[#3222C6] " : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("Job")}
        >
          <li
            className={`${
              activeLink === "Jobt" ? "bg-slate-300" : " "
            }cursor-pointer w-full flex items-center gap-2  `}
          >
            <div
              className={`${
                activeLink === "Job" ? "block" : "hidden"
              } w-[6px] rounded-r-lg bg-[#3222C6] h-8`}
            ></div>
            <p className="font-normal text-[20px] dark:text-white ">Job</p>
          </li>
        </Link>
        <hr />
        <Link
          to={`/Search/${searchInput}/Post`}
          className={`${
            activeLink === "Post" ? "text-[#3222C6] " : "text-gray-700"
          } `}
          onClick={() => handleLinkClick("Post")}
        >
          <li
            className={`${
              activeLink === "Post" ? "bg-slate-300" : " "
            }cursor-pointer w-full flex items-center gap-2 `}
          >
            <div
              className={`${
                activeLink === "Post" ? "block" : "hidden"
              } w-[6px] rounded-r-lg bg-[#3222C6] h-8`}
            ></div>
            <p className="font-normal text-[20px] dark:text-white ">Post</p>
          </li>
        </Link>
        <hr />
      </ul>
    </div>
  );
}

export default SearchNavPublic;
