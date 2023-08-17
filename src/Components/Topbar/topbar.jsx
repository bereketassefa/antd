import React, { useEffect, useState } from "react";
import logos from "../../assets/logo/addisLogoS.png";
import logo from "../../assets/logo/addisLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBars,
  faCaretDown,
  faSearch,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faMessage } from "@fortawesome/free-regular-svg-icons";
import profilePlaceHolder from "../../assets/logo/profilePlaceHolder.png";
import DropMenu from "./DropMenu/dropMenu";
import { useMediaQuery } from "react-responsive";
import Avatar from "../../Fields/Avatar/avatar";
import Search from "../../Fields/Search/search";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import bt from "../../assets/image/BT.png";

export default function Topbar() {
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isScreenMdOrLarger = useMediaQuery({ minWidth: 768 });

  const handleHover = () => {
    setDropDown(!dropDown);
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className=" z-20 w-full drop-shadow-lg h-topbarH bg-topbarBg border-1 border-[rgba(0, 0, 0, 0.10)] p-3 flex items-center justify-center fixed md:sticky ">
        <div className="flex  w-full md:max-w-[1120px] items-center justify-between">
          <div className="w-[50px] h-[45px] md:w-[208px] md:h-[33px]   flex items-center justify-center">
            {isScreenMdOrLarger ? (
              <img src={logo} alt="" className="w-full" />
            ) : (
              <img src={logos} alt="" className="w-full" />
            )}
          </div>

          <div className="flex gap-[1rem] items-center ">
            <div className="flex gap-[1rem] items-center">
              {/* search bar */}
              <div className=" relative">
                <div className=" flex gap-2 border-[2px] border-blue-800 py-[10px] px-4 items-center min-w-[300px] ">
                  <div>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xl text-gray-500 "
                    />
                  </div>
                  <input
                    className=" outline-none text-[17px] "
                    type="text"
                    placeholder="Search"
                  />
                </div>
                {/* <div className=" absolute bg-white w-full p-1 border-[2px] border-blue-800 translate-y-[1px]">
                  <div className=" flex justify-start items-center border-2 border-blue-800  my-2">
                    <img className="w-[50px] h-[50px]" src={bt} alt="" />
                    <p>Company Name</p>
                  </div>

                  <div>
                    <p className="flex justify-center border-2 border-blue-800">
                      See All results
                    </p>
                  </div>
                </div> */}
              </div>

              {/* <Search  /> */}
              {/* message  */}
              <Link to={"/notifications"}>
                <Badge count={5}>
                  <FontAwesomeIcon icon={faBell} className="text-largeT" />
                </Badge>
              </Link>
              {/* notification */}
              <FontAwesomeIcon icon={faMessage} className="text-largeT" />
            </div>

            <FontAwesomeIcon
              icon={!menuOpen ? faBars : faSquareXmark}
              className={
                !menuOpen
                  ? "text-smallT text-primary md:hidden cursor-pointer "
                  : "text-smallT text-secondary md:hidden cursor-pointer "
              }
              onClick={handleMenu}
            />
            <div
              className="hidden md:flex items-center jutify-center flex-col "
              onClick={handleHover}
              // onMouseLeave={handleLeaveHover}
            >
              <div className="flex items-center gap-2">
                <Avatar img={profilePlaceHolder} />
                <div className="flex items-center gap-2">
                  <h1 className=" text-smallP md:text-midP lg:text-largeP">
                    Company Name
                  </h1>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
              <div
                className={
                  dropDown
                    ? "absolute mt-[65px] w-[208px] drop-shadow-lg bg-topbarBg transition ease-in-out delay-150"
                    : "h-[0px] overflow-hidden absolute mt-[65px] w-[208px] drop-shadow-lg bg-topbarBg transition ease-in-out delay-150"
                }
              >
                <ul className="flex flex-col w-full h-full items-center justify-center">
                  <li className="w-full p-3 items-center justify-start hover:bg-lightPrimaryHover">
                    <p className="text-smallP md:text-midP lg:text-largeP">
                      {" "}
                      View Profile
                    </p>
                  </li>
                  <li className="w-full p-3 items-center justify-start  hover:bg-lightPrimaryHover">
                    <p className=" text-smallP md:text-midP lg:text-largeP">
                      Sign Out
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DropMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
}
