import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
function RelationPage() {
  const [activeLink, setActiveLink] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsClicked();
  };

  return (
    <div className="bg-[#FFF] text-[#000000] ">
      <ul className=" flex mx-auto sm:px-0  md:justify-between  gap-6 lg:justify-between md:px-10 items-center  lg:px-16 py-4  ">
        <Link
          to="/feed/Relations/relation"
          className={` ${isClicked ? "underline" : ""}  
          }  ${
            activeLink === "Relations" ? "text-[#3222C6]" : "text-gray-700"
          }`}
          onClick={() => handleLinkClick("Relations")}
        >
          <li>
            <p
              className={`  ${
                activeLink === "Relations" ? "text-[#3222C6]" : "text-gray-600"
              }  text-smallP md:text-midP lg:text-xl  `}
            >
              Relations
            </p>
          </li>
          <div
            className={`${
              activeLink === "Relations" && "h-[2px] bg-[#3222C6]"
            }`}
          ></div>
        </Link>

        <Link
          to="/feed/Relations/Requested"
          className={`${
            activeLink === "Requested Relation"
              ? "text-[#3222C6]"
              : "text-gray-700"
          }`}
          onClick={() => handleLinkClick("Requested Relation")}
        >
          <li>
            <p
              className={`  ${
                activeLink === "Requested Relation"
                  ? "text-[#3222C6]"
                  : "text-gray-600"
              }  text-smallP md:text-midP lg:text-xl   `}
            >
              Requested Relation
            </p>
          </li>
          <div
            className={`${
              activeLink === "Requested Relation" && "h-[2px] bg-[#3222C6]"
            }`}
          ></div>
        </Link>
        <Link
          to="/feed/Relations/Recommended"
          className={`${
            activeLink === "Recommended relations"
              ? "text-[#3222C6]"
              : "text-gray-700"
          }`}
          onClick={() => handleLinkClick("Recommended relations")}
        >
          <li>
            <p
              className={`  ${
                activeLink === "Recommended relations"
                  ? "text-[#3222C6]"
                  : "text-gray-600"
              }  text-smallP md:text-midP lg:text-xl  `}
            >
              Recommended relations
            </p>
          </li>
          <div
            className={`${
              activeLink === "Recommended relations" && "h-[2px] bg-[#3222C6]"
            }`}
          ></div>
        </Link>
      </ul>
    </div>
  );
}

export default RelationPage;
