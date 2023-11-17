import React, { useState, useContext } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillXDiamondFill, BsFillPersonFill } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { TbShieldLockFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";

const Setting = () => {
  const navigate = useNavigate();
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  // const [selectedPage, setSelectedPage] = useState(null);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const GoTo = (link) => {
    navigate(link);
  };

  function getSelectedValue() {
    // console.log("selected......");
    var select = document.getElementById("mySelect");
    var selectedValue = select.value;
    // alert(selectedValue);
    navigate(selectedValue);
  }

  return (
    <>
    <div className="fixed dark:bg-[#1b1f23] p-3 mt-6 bg-white w-full flex justify-around 
    gap-6 z-50 md:hidden">
      {/* <p>Setting</p> */}
      <AiFillSetting
                  // style={{ fontSize: 16 + myFontSize }}
                  className="dark:text-white text-[#000000] h-6 w-6 ml-[-180px]"
                />
  <select onClick={getSelectedValue} id="mySelect" className="ml-[-390px] ">
    {/* <div className=""> */}

            <option value="/feed/settings" className="relative mt-[-100px] top-2 right-0 ">
              <p style={{ fontSize: 16 + myFontSize }}>General</p>
            </option>

            <option value="/feed/settings/edit">
              <p style={{ fontSize: 16 + myFontSize }}> Edit Profile</p>
            </option>
            <option value="/feed/settings/NotificationSetting">
              <p style={{ fontSize: 16 + myFontSize }}> Notification Setting</p>
            </option>
            <option value="/feed/settings/Help">
              <p style={{ fontSize: 16 + myFontSize }}> Help</p>
            </option>
            <option value="/feed/settings/contact">
              <p style={{ fontSize: 16 + myFontSize }}> Contact</p>
            </option>
            <option value="/feed/settings/Privacy">
              <p style={{ fontSize: 16 + myFontSize }}> Privacy Policy</p>
            </option>
    {/* </div> */}
          </select>
  </div>
    <div
      className={`${
        window.innerWidth < 640
          ? "dark:bg-[#1b1f23] rounded-lg w-full flex justify-center  mx-0 mt-[20px] hidden "
          : "dark:bg-[#1b1f23] rounded-lg flex sticky top-[85px] drop-shadow-xl "
      }`}
    >
      <nav className="dark:bg-[#1b1f23] bg-[#F9F7F7]  lg:block text-[#000000]  mt-0 md:mt-5 w-full md:w-[325px]  md:h-[452px]">
        <ul className=" space-y-4 gap-4 mt-4 ">
          <li className="py-2 px-6 mb-3 flex items-center gap-2">
            <option value="setings">
              <Link to="setings">
                <AiFillSetting
                  style={{ fontSize: 16 + myFontSize }}
                  className="dark:text-white text-[#000000] h-6 w-6"
                />
              </Link>
            </option>
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
  
    </>
  );
};

export default Setting;
