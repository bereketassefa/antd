import React, { useState, useContext } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillXDiamondFill, BsFillPersonFill } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";

const Setting = () => {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  const [selectedPage, setSelectedPage] = useState(null);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  console.log("myFontSize:", myFontSize);

  return (
    <div className="flex sticky top-[50px] drop-shadow-xl">
      <nav className="bg-[#F9F7F7] hidden lg:block text-[#000000]  mt-5 w-[325px]  h-[452px]">
        <ul className=" space-y-4 gap-4 mt-4">
          <li className="py-2 px-6 mb-3 flex items-center hover:bg-slate-300 gap-2">
            <Link to="setings">
              <AiFillSetting
                style={{ fontSize: 16 + myFontSize }}
                className="text-[#000000] h-6 w-6"
              />
            </Link>
            <p className="text-[#000000]" style={{ fontSize: 16 + myFontSize }}>
              {" "}
              Setting
            </p>
          </li>
          <Link
            to="/settings/general"
            className={`${
              activeLink === "General" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("General")}
          >
            <li className="py-2 px-6 flex items-center hover:bg-slate-300 gap-2">
              <BsFillXDiamondFill
                className={` ${
                  activeLink === "General" ? "text-blue-500" : "text-[#555555]"
                } h-5 w-5 `}
              />
              <p style={{ fontSize: 16 + myFontSize }}>General</p>
            </li>
          </Link>

          <Link
            to="/settings/edit"
            className={`${
              activeLink === "Edit Profile" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Edit Profile")}
          >
            <li className="py-2 px-6 flex items-center  hover:bg-slate-300 gap-2">
              <BsFillPersonFill
                className={`${
                  activeLink === "Edit Profile"
                    ? "text-blue-500"
                    : "text-[#555555]"
                } h-6 w-6 `}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Edit Profile</p>
            </li>
          </Link>
          <Link
            to="/settings/Notification"
            className={`${
              activeLink === "Notification Setting"
                ? "text-blue-500"
                : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Notification Setting")}
          >
            <li className="py-2 px-6 flex items-center hover:bg-slate-300 gap-2">
              <AiFillSetting
                className={`${
                  activeLink === "NotificationSetting"
                    ? "text-blue-500"
                    : "text-[#555555]"
                }  h-6 w-6`}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Notification Setting</p>
            </li>
          </Link>
          <Link
            to="/settings/Help"
            className={`${
              activeLink === "Help" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Help")}
          >
            <li className="py-2 px-6 flex items-center hover:bg-slate-300 gap-2">
              <IoMdHelpCircle
                className={`${
                  activeLink === "Help" ? "text-blue-500" : "text-[#555555]"
                } h-6 w-6 `}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Help</p>
            </li>
          </Link>
          <Link
            to="/settings/contact"
            className={`${
              activeLink === "Contact" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Contact")}
          >
            <li className="py-2 px-6 flex items-center hover:bg-slate-300 gap-2">
              <RiContactsBook2Line
                className={`${
                  activeLink === "Contact" ? "text-blue-500" : "text-[#555555]"
                } h-6 w-6`}
              />
              <p style={{ fontSize: 16 + myFontSize }}> Contact</p>
            </li>
          </Link>
          <Link
            to="/settings/Privacy"
            className={`${
              activeLink === "Privacy Policy"
                ? "text-blue-500"
                : "text-gray-700"
            }`}
            onClick={() => handleLinkClick("Privacy Policy")}
          >
            <li className="py-2 px-6 flex items-center hover:bg-slate-300 gap-2">
              <MdPrivacyTip 
                className={`${
                  activeLink === "Privacy Policy"
                    ? "text-blue-500"
                    : "text-[#555555]"
                }h-8 w-8`}
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
