import React, { useState, useContext } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillXDiamondFill, BsFillPersonFill } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { TbShieldLockFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";

const Setting = () => {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  // const [selectedPage, setSelectedPage] = useState(null);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="dark:bg-[#1b1f23] rounded-lg flex sticky top-[85px] drop-shadow-xl">
      <nav className="dark:bg-[#1b1f23] bg-[#F9F7F7] hidden lg:block text-[#000000]  mt-5 w-[325px]  h-[452px]">
        <ul className=" space-y-4 gap-4 mt-4">
          <li className="py-2 px-6 mb-3 flex items-center gap-2">
            <Link to="setings">
              <AiFillSetting
                style={{ fontSize: 16 + myFontSize }}
                className="dark:text-white text-[#000000] h-6 w-6"
              />
            </Link>
            <p
              className="dark:text-white text-[#000000]"
              style={{ fontSize: 16 + myFontSize }}
            >
              {" "}
              Setting
            </p>
          </li>
          <Link
            to="/feed/settings"
            className={`${
              activeLink === "General" ? "text-[#3222C6] " : "text-gray-700"
            } `}
            onClick={() => handleLinkClick("General")}
          >
            <li
              className={`${
                activeLink === "General" ? "bg-slate-300" : " "
              } py-2 px-6 flex items-center  gap-2 `}
            >
              <BsFillXDiamondFill
                className={` text-primary ${
                  activeLink === "General" ? "dark:text-white" : "text-gray-700"
                }
                } h-5 w-5 `}
              />
              <p style={{ fontSize: 16 + myFontSize }}>General</p>
            </li>
          </Link>

          <Link
            to="/feed/settings/edit"
            className={`${
              activeLink === "Edit Profile" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Edit Profile")}
          >
            <li
              className={`${
                activeLink === "Edit Profile" ? "bg-slate-300" : " "
              } py-2 px-6 flex items-center  gap-2 `}
            >
              <BsFillPersonFill
                className={` text-primary ${
                  activeLink === "Edit Profile"
                    ? "text-[#3222C6]  "
                    : "text-[#555555]"
                }  h-6 w-6 `}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Edit Profile</p>
            </li>
          </Link>
          <Link
            to="/feed/settings/NotificationSetting"
            className={`${
              activeLink === "Notification Setting"
                ? "text-[#3222C6] "
                : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Notification Setting")}
          >
            <li
              className={`${
                activeLink === "Notification Setting" ? "bg-slate-300" : " "
              } py-2 px-6 flex items-center  gap-2 `}
            >
              <AiFillSetting
                className={` text-primary ${
                  activeLink === "Notification Setting"
                    ? "text-[#3222C6] "
                    : "text-[#555555]"
                }  h-6 w-6`}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Notification Setting</p>
            </li>
          </Link>
          <Link
            to="/feed/settings/Help"
            className={`${
              activeLink === "Help" ? "text-[#3222C6] " : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Help")}
          >
            <li
              className={`${
                activeLink === "Help" ? "bg-slate-300" : " "
              } py-2 px-6 flex items-center  gap-2 `}
            >
              <IoMdHelpCircle
                className={`text-primary  ${
                  activeLink === "Help" ? "text-[#3222C6] " : "text-[#555555]"
                } h-6 w-6 `}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Help</p>
            </li>
          </Link>
          <Link
            to="/feed/settings/contact"
            className={`${
              activeLink === "Contact" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Contact")}
          >
            <li
              className={`${
                activeLink === "Contact" ? "bg-slate-300" : " "
              } py-2 px-6 flex items-center  gap-2 `}
            >
              <RiContactsBook2Line
                className={`text-primary  ${
                  activeLink === "Contact"
                    ? "text-[#3222C6] "
                    : "text-[#555555]"
                } h-6 w-6`}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Contact</p>
            </li>
          </Link>
          <Link
            to="/feed/settings/Privacy"
            className={`${
              activeLink === "Privacy Policy"
                ? "text-[#3222C6] "
                : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Privacy Policy")}
          >
            <li
              className={`${
                activeLink === "Privacy Policy" ? "bg-slate-300" : " "
              } py-2 px-6 flex items-center  gap-2 `}
            >
              <TbShieldLockFilled
                className={`text-primary ${
                  activeLink === "Privacy Policy"
                    ? "text-[#3222C6] "
                    : "text-[#555555]"
                } h-6 w-6`}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Privacy Policy</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Setting;
