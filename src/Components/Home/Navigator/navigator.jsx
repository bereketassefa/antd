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
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigator() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="hidden md:flex items-start justify-center mt-4 w-[300px] mx-w-[300px] p-4 bg-white sticky top-[65px] drop-shadow-xl">
      <div className="w-full">
        <div className="w-full">
          <ul className="w-full flex flex-col gap-3">
            <Link
              to={"/home"}
              className={`${
                activeLink === "Home" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Home")}
            >
              <li
                className={` ${
                  activeLink === "Home" ? "bg-slate-300" : " "
                }cursor-pointer w-full flex items-center gap-2`}
              >
                <FontAwesomeIcon
                  className={` ${
                    activeLink === "Home" ? "text-[#3222C6]" : "text-gray-700"
                  }text-largeP md:text-smallT `}
                  icon={faHome}
                />{" "}
                <p className="text-smallP md:text-midP lg:text-largeP ">Home</p>
              </li>
            </Link>

            <li
              className="cursor-pointer w-full flex items-center gap-2"
              onClick={() => handleLinkClick("Dashboard")}
            >
              <FontAwesomeIcon
                className={`${
                  activeLink === "Dashboard"
                    ? "text-[#3222C6]"
                    : "text-gray-600"
                } text-largeP md:text-smallT `}
                icon={faDashboard}
              />{" "}
              <p
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
              to="///"
              className={`${
                activeLink === "Servicesl" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Services")}
            >
              <li
                className="cursor-pointer w-full flex items-center gap-2"
              >
                <FontAwesomeIcon
                  className={`${
                    activeLink === "Services"
                      ? "text-[#3222C6]"
                      : "text-gray-700"
                  } text-largeP md:text-smallT `}
                  icon={faCloud}
                />{" "}
                <p
                  className={`   ${
                    activeLink === "Services"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-smallP md:text-midP lg:text-largeP `}
                >
                  Services
                </p>
              </li>
            </Link>

            <li className="cursor-pointer w-full flex items-center gap-2">
              <FontAwesomeIcon
                className="text-largeP md:text-smallT text-gray-600"
                icon={faDollarSign}
              />{" "}
              <p className="text-smallP md:text-midP lg:text-largeP ">
                Invoice Finance
              </p>
            </li>
            <Divider className="bg-gray-300" />

            <Link
              to="/Relations/relation"
              className={`${
                activeLink === "Relations" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Relations")}
            >
              <li
                className=" cursor-pointer w-full flex items-center gap-2"
              >
                <FontAwesomeIcon
                  className={` ${
                    activeLink === "Relations"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-largeP md:text-smallT `}
                  icon={faBell}
                />{" "}
                <p
                  className={`${
                    activeLink === "Relations"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-smallP md:text-midP lg:text-largeP `}
                >
                  Relations
                </p>
              </li>
            </Link>
            <li className="cursor-pointer w-full flex items-center gap-2">
              <FontAwesomeIcon
                className="text-largeP md:text-smallT text-gray-600"
                icon={faMessage}
              />{" "}
              <p
                className={` ${
                  activeLink === "Explore Product"
                    ? "text-blue-500"
                    : "text-gray-600"
                }text-smallP md:text-midP lg:text-largeP `}
              >
                Explore Product
              </p>
            </li>
            <Link
              to="///"
              className={`${
                activeLink === "Live" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Live")}
            >
              <li
                className="cursor-pointer w-full flex items-center gap-2"
              >
                <FontAwesomeIcon
                  className={`${
                    activeLink === "Live" ? "text-[#3222C6]" : "text-gray-600"
                  }text-largeP md:text-smallT `}
                  icon={faClapperboard}
                />{" "}
                <p
                  className={`  ${
                    activeLink === "Live" ? "text-[#3222C6]" : "text-gray-600"
                  }text-smallP md:text-midP lg:text-largeP`}
                >
                  Live
                </p>
              </li>
            </Link>
            <li className="cursor-pointer w-full flex items-center gap-2  md:flex lg:hidden">
              <FontAwesomeIcon
                className={`   ${
                  activeLink === " Demand Products"
                    ? "text-blue-500"
                    : "text-gray-600"
                }text-largeP md:text-smallT text-gray-600`}
                icon={faBoxes}
              />{" "}
              <p
                className={`   ${
                  activeLink === "Demand Products"
                    ? "text-blue-500"
                    : "text-gray-600"
                }text-smallP md:text-midP lg:text-largeP `}
                onClick={() => setActiveLink("Demand Products")}
              >
                Demand Products
              </p>
            </li>
            <Link
              to="/settings/general"
              className={`${
                activeLink === "Setting" ? "text-[#3222C6] " : "text-gray-700"
              } `}
              onClick={() => handleLinkClick("Setting")}
            >
              <li
                className="cursor-pointer w-full flex items-center gap-2"
              >
                <FontAwesomeIcon
                  className={` ${
                    activeLink === "Setting"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  } text-largeP md:text-smallT `}
                  icon={faGear}
                />{" "}
                <p
                  className={`  ${
                    activeLink === "Setting"
                      ? "text-[#3222C6]"
                      : "text-gray-600"
                  }  text-smallP md:text-midP lg:text-largeP `}
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
