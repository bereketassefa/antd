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

  return (
    <div className="hidden md:flex items-start justify-center mt-4 w-[300px] mx-w-[300px] p-4 bg-white sticky top-[65px] drop-shadow-xl">
      <div className="w-full">
        <div className="w-full">
          <ul className="w-full flex flex-col gap-3">
            <Link to={"/feed"}>
              <li
                className="cursor-pointer w-full flex items-center gap-2"
                onClick={() => setActiveLink("Home")}
              >
                <FontAwesomeIcon
                  className={`${
                    activeLink === "Home" ? "text-blue-500" : "text-gray-600"
                  } text-largeP md:text-smallT `}
                  icon={faHome}
                />{" "}
                <p
                  className={`${
                    activeLink === "Home" ? "text-blue-500" : "text-gray-600"
                  }  text-smallP md:text-midP lg:text-largeP `}
                >
                  Home
                </p>
              </li>
            </Link>
            <li className="cursor-pointer w-full flex items-center gap-2">
              <FontAwesomeIcon
                className="text-largeP md:text-smallT text-gray-600"
                icon={faDashboard}
              />{" "}
              <p
                className={` ${
                  activeLink === "Dashboard" ? "text-blue-500" : "text-gray-600"
                }  text-smallP md:text-midP lg:text-largeP `}
              >
                Dashboard
              </p>
            </li>
            <li className="cursor-pointer w-full flex items-center gap-2">
              <FontAwesomeIcon
                className="text-largeP md:text-smallT text-gray-600"
                icon={faCloud}
              />{" "}
              <p
                className={`   ${
                  activeLink === "Services" ? "text-blue-500" : "text-gray-600"
                } text-smallP md:text-midP lg:text-largeP `}
              >
                Services
              </p>
            </li>
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
            <Link to={"/Relations/relation"}>
              <li className="cursor-pointer w-full flex items-center gap-2">
                <FontAwesomeIcon
                  className={` ${
                    activeLink === "Relation"
                      ? "text-blue-500"
                      : "text-gray-600"
                  } text-largeP md:text-smallT `}
                  icon={faBell}
                />{" "}
                <p
                  className={`${
                    activeLink === "Relation"
                      ? "text-blue-500"
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
            <li className="cursor-pointer w-full flex items-center gap-2">
              <FontAwesomeIcon
                className="text-largeP md:text-smallT text-gray-600"
                icon={faClapperboard}
              />{" "}
              <p
                className={`  ${
                  activeLink === "Live" ? "text-blue-500" : "text-gray-600"
                }text-smallP md:text-midP lg:text-largeP`}
              >
                Live
              </p>
            </li>
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
            <Link to={"/feed/settings"}>
              <li
                className="cursor-pointer w-full flex items-center gap-2"
                onClick={() => setActiveLink("Setting")}
              >
                <FontAwesomeIcon
                  className={` ${
                    activeLink === "Setting" ? "text-blue-500" : "text-gray-600"
                  } text-largeP md:text-smallT `}
                  icon={faGear}
                />{" "}
                <p
                  className={`  ${
                    activeLink === "Setting" ? "text-blue-500" : "text-gray-600"
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
