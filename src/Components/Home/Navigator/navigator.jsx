import React, { useState, useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import {
  faBell,
  faBoxes,
  faClapperboard,
  faCloud,
  faDashboard,
  faDollarSign,
  faGear,
  faHome,
  faMessage,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../../theme/ThemeContext";

export default function Navigator({ handleAddProduct }) {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className=" rounded-lg dark:bg-[#1b1f23] hidden md:flex bg-white  items-start justify-center mt-8 w-[300px] mx-w-[300px] p-4  sticky  top-[75px] drop-shadow-xl">
      <div className="w-full">
        <div className="w-full">
          <ul
            className="w-full flex flex-col gap-3"
            onClick={() => handleLinkClick("Home")}
          >
            <Link to={"/feed"}>
              <li
                className={` ${
                  activeLink === "Home" ? "bg-slate-300" : " "
                }cursor-pointer w-full flex items-center gap-2`}
              >
                <GoHome
                  style={{ fontSize: 16 + myFontSize }}
                  className={` ${
                    activeLink === "Home" ? "text-[#3222C6]" : "text-gray-700"
                  }  text-2xl `}
                />
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className={` ${
                    activeLink === "Home" ? "text-[#3222C6]" : "text-gray-600"
                  } text-smallP md:text-midP lg:text-largeP `}
                >
                  Home
                </p>
              </li>
            </Link>
            {/* 
            <li
              className="cursor-pointer w-full flex items-center gap-2"
              onClick={() => handleLinkClick("Dashboard")}
            >
              <FontAwesomeIcon
                style={{ fontSize: 16 + myFontSize }}
                className={`${
                  activeLink === "Dashboard"
                    ? "text-[#3222C6]"
                    : "text-gray-600"
                } text-largeP md:text-smallT `}
                icon={faDashboard}
              />{" "}
              <p
                style={{ fontSize: 16 + myFontSize }}
                className={`${
                  activeLink === "Dashboard"
                    ? "text-[#3222C6]"
                    : "text-gray-600"
                }  text-smallP md:text-midP lg:text-largeP `}
              >
                Dashboard
              </p>
            </li>

            <Link
              to="#"
              className={`${
                activeLink === "Servicesl" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Services")}
            >
              <li className="cursor-pointer w-full flex items-center gap-2">
                <FontAwesomeIcon
                  style={{ fontSize: 16 + myFontSize }}
                  className={`${
                    activeLink === "Services"
                      ? "text-[#3222C6]"
                      : "text-gray-700"
                  } text-largeP md:text-smallT `}
                  icon={faCloud}
                />{" "}
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className={`   ${
                    activeLink === "Services"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-smallP md:text-midP lg:text-largeP `}
                >
                  Services
                </p>
              </li>
            </Link> */}

            {/* <Link
              to="#"
              className={`${
                activeLink === "Invoice Finance"
                  ? "text-[#3222C6] "
                  : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Invoice Finance")}
            >
              {" "}
              <li className="cursor-pointer w-full flex items-center gap-2">
                <FontAwesomeIcon
                  style={{ fontSize: 16 + myFontSize }}
                  className={`${
                    activeLink === "General"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  }text-largeP md:text-smallT`}
                  icon={faDollarSign}
                />{" "}
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className="text-smallP md:text-midP lg:text-largeP "
                >
                  Invoice Finance
                </p>
              </li>
            </Link> */}
            <Divider className="bg-gray-300" />

            <Link
              to="Relations/relation"
              className={`${
                activeLink === "Relations" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Relations")}
            >
              <li className="dark:text-white cursor-pointer w-full flex items-center gap-2">
                <PiUsersThreeBold
                  style={{ fontSize: 16 + myFontSize }}
                  className={` ${
                    activeLink === "Relations"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-largeP md:text-smallT dark:text-white `}
                />{" "}
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className={`${
                    activeLink === "Relations"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-smallP md:text-midP lg:text-largeP dark:text-white `}
                >
                  Relations
                </p>
              </li>
            </Link>
            <Link
              to="/feed/messages"
              className={`${
                activeLink === "Message" ? "text-[#3222C6] " : "text-gray-600"
              } `}
              onClick={() => handleLinkClick("Message")}
            >
              <li
                className="dark:text-white cursor-pointer w-full flex items-center gap-2"
                // onClick={handleAddProduct}
              >
                <AiOutlineMessage
                  style={{ fontSize: 16 + myFontSize }}
                  className={` ${
                    activeLink === "Message"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-[28px]  dark:text-white`}
                />{" "}
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className={`dark:text-white  text-xl md:text-2xl lg:text-2xl `}
                >
                  Message
                </p>
              </li>
            </Link>
            <Link
              to="#"
              className={`${
                activeLink === "Add Product"
                  ? "text-[#3222C6] "
                  : "text-gray-600"
              } `}
              onClick={() => handleLinkClick("Add Product")}
            >
              <li
                className="dark:text-white cursor-pointer w-full flex items-center gap-2"
                onClick={handleAddProduct}
              >
                <IoAddCircleOutline
                  style={{ fontSize: 16 + myFontSize }}
                  className={` ${
                    activeLink === "Add Product"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  }   text-xl md:text-2xl lg:text-2xl dark:text-white `}
                />
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className={`dark:text-white  text-xl md:text-2xl lg:text-2xl `}
                >
                  Add Product
                </p>
              </li>
            </Link>
            {/* <Link
              to="///"
              className={`${
                activeLink === "Live" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Live")}
            >
              <li className="cursor-pointer w-full flex items-center gap-2">
                <FontAwesomeIcon
                  style={{ fontSize: 16 + myFontSize }}
                  className={`${
                    activeLink === "Live" ? "text-[#3222C6]" : "text-gray-600"
                  }text-largeP md:text-smallT `}
                  icon={faClapperboard}
                />{" "}
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className={`  ${
                    activeLink === "Live" ? "text-[#3222C6]" : "text-gray-600"
                  }text-smallP md:text-midP lg:text-largeP`}
                >
                  Live
                </p>
              </li>
            </Link> */}
            {/* <li className="cursor-pointer w-full flex items-center gap-2  md:flex lg:hidden">
              <FontAwesomeIcon
                style={{ fontSize: 16 + myFontSize }}
                className={`   ${
                  activeLink === " Demand Products"
                    ? "text-blue-500"
                    : "text-gray-600"
                }text-largeP md:text-smallT text-gray-600`}
                icon={faBoxes}
              />{" "}
              <p
                style={{ fontSize: 16 + myFontSize }}
                className={`   ${
                  activeLink === "Demand Products"
                    ? "text-blue-500"
                    : "text-gray-600"
                }text-smallP md:text-midP lg:text-largeP `}
                onClick={() => setActiveLink("Demand Products")}
              >
                Demand Products
              </p>
            </li> */}
            <Link to={"/feed/settings"}>
              <li
                className="dark:text-white cursor-pointer w-full flex items-center gap-2"
                onClick={() => setActiveLink("Setting")}
              >
                <AiOutlineSetting
                  style={{ fontSize: 16 + myFontSize }}
                  className={` ${
                    activeLink === "Setting"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-largeP md:text-smallT dark:text-white `}
                  icon={faGear}
                />{" "}
                <p
                  style={{ fontSize: 16 + myFontSize }}
                  className={`  ${
                    activeLink === "Setting"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  }  text-smallP md:text-midP lg:text-largeP dark:text-white `}
                >
                  Setting
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
