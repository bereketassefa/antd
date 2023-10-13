import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

import logo from "../../assets/PuplicImage/addissystems-logo.png";

import icon from "../../assets/PuplicImage/android-chrome-192x192.png";
import Button from "./Button";

import { useTranslation } from "../../../src/Lang/Translater";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { translate, language, setLanguage } = useTranslation();
  const [lang, setLang] = useState([language, "Amh", "Oro"]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const languageSwitcher = (index) => {
    const newArray = [...lang];
    newArray[0] = lang[index];
    newArray[index] = lang[0];
    setLang(newArray);
    setLanguage(lang[index]);
    localStorage.setItem("myLanguage", JSON.stringify(lang[index]));
    localStorage.setItem("languageMenu", JSON.stringify(newArray));
  };

  useEffect(() => {
    const localLangData = localStorage.getItem("languageMenu");
    if (localLangData !== null) {
      setLang(JSON.parse(localLangData));
    }
  }, []);

  useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenWidth]);

  return (
    <nav className=" sticky top-0 z-40 w-full bg-slate-50 px-2 opacity-100 shadow-md ">
      <div className=" container z-30 mx-auto flex h-16 max-w-7xl items-center justify-between font-medium ">
        <div className="-ml-1 mt-1 w-[190px] duration-300 hover:scale-[1.02] ">
          <Link to="/">
            <img
              className="hidden sm:block"
              id="logo"
              src={logo}
              alt="addis systems logo"
            />
            <img
              className="ml-2 w-7 sm:hidden"
              id="logo"
              src={icon}
              alt="addis systems logo"
            />
          </Link>
        </div>
        <ul
          className={`fixed flex flex-col items-start bg-white ${
            menuOpen
              ? "right-0 opacity-100"
              : "-right-64 opacity-0 sm:-right-80"
          } mdm: top-0 z-20 h-full w-60 gap-y-4 pl-4 pr-4 pt-20 duration-500 sm:w-80 sm:pr-6 mdm:static mdm:mr-1 mdm:flex mdm:h-fit mdm:w-fit mdm:flex-row mdm:items-center mdm:justify-between mdm:gap-3 mdm:bg-inherit mdm:p-0 mdm:opacity-100 mdm:duration-0`}
        >
          <li className="hover:text-addispink" onClick={closeMenu}>
            <Link to="/">{translate("home")}</Link>
          </li>
          <li className="">
            <div className="group flex flex-col items-start transition-all duration-500 mdm:block ">
              <span className="flex cursor-pointer items-center group-hover:text-addispink">
                {translate("solution")}
                <span className="ml-1 origin-center text-xs duration-500 group-hover:-rotate-180">
                  <FaChevronDown />
                </span>
              </span>
              <ul className="flex h-0 min-w-[150px] flex-col items-start overflow-hidden rounded-b-md bg-white px-3 text-sm shadow-md duration-500  group-hover:h-48 group-hover:py-3 mdm:absolute mdm:items-start mdm:justify-evenly ">
                <li
                  className="my-1 py-1 hover:text-addispink"
                  onClick={closeMenu}
                >
                  <Link to="pos-service">{translate("POS as a Service")}</Link>
                </li>
                <li
                  className="my-1 py-1 hover:text-addispink"
                  onClick={closeMenu}
                >
                  <Link to="erp-service">{translate("ERP as a Service")}</Link>
                </li>
                <li
                  className="my-1 py-1 hover:text-addispink"
                  onClick={closeMenu}
                >
                  <Link to="m-pos">{translate("Mpos head")}</Link>
                </li>
                <li
                  className="my-1 py-1 hover:text-addispink"
                  onClick={closeMenu}
                >
                  <Link to="electronic-invoice">
                    {translate("Electronic Invoice")}
                  </Link>
                </li>
                <li
                  className="my-1 py-1 hover:text-addispink"
                  onClick={closeMenu}
                >
                  <Link to="business-intelligence">
                    {translate("Business Intelligence")}
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-addispink" onClick={closeMenu}>
            <Link to="about-us">{translate("about us")}</Link>
          </li>
          <li className="hover:text-addispink" onClick={closeMenu}>
            <Link to="blog">{translate("blog")}</Link>
          </li>
          <li className="hover:text-addispink" onClick={closeMenu}>
            <Link to="contact">{translate("contact")}</Link>
          </li>
          <li className="group  flex flex-col items-start mdm:block">
            <span className=" flex items-center group-hover:text-addispink">
              {translate("more info")}
              <span className="ml-1 text-xs duration-500 group-hover:-rotate-180">
                <FaChevronDown />
              </span>
            </span>{" "}
            <ul className="flex h-0 min-w-[150px] flex-col items-start justify-evenly overflow-hidden rounded-b-md bg-white px-3 pb-0 text-sm shadow-md duration-500 group-hover:h-32 group-hover:py-3 mdm:absolute mdm:items-start">
              <li className="hover:text-addispink" onClick={closeMenu}>
                <Link to="">{translate("User Guide")}</Link>
              </li>
              <li className="hover:text-addispink" onClick={closeMenu}>
                <Link to="faq">FAQs</Link>
              </li>
              <li className="hover:text-addispink" onClick={closeMenu}>
                <Link to="">{translate("Help")}</Link>
              </li>
            </ul>
          </li>
          <div className=" flex flex-col items-start gap-y-2 mdm:hidden">
            <li className=" group relative flex flex-col items-start mdm:ml-3 mdm:block">
              <span className=" flex items-center text-xs hover:text-addispink">
                {lang[0]}
                <span className="ml-0.5 text-xs duration-500 group-hover:-rotate-180 ">
                  <FaChevronDown />
                </span>
              </span>{" "}
              <ul className="right-0 flex h-0 flex-col items-end overflow-hidden rounded-b-md bg-white px-4 text-sm shadow-md duration-500 group-hover:h-16 group-hover:pt-3 mdm:absolute mdm:min-w-[90px]">
                <li
                  className="float-right cursor-pointer hover:text-addispink"
                  onClick={() => {
                    languageSwitcher(1);
                    closeMenu();
                  }}
                >
                  {lang[1]}
                </li>
                <hr className="my-0.5" />
                <li
                  className="float-right cursor-pointer hover:text-addispink"
                  onClick={() => {
                    languageSwitcher(2);
                    closeMenu();
                  }}
                >
                  {lang[2]}{" "}
                </li>
              </ul>
            </li>
            <a href="/login" onClick={closeMenu}>
              <Button
                text={translate("log in")}
                py={6}
                width={120}
                bgHover="hover:bg-addishover"
                textHover="text-addispink"
                id={1}
              />
            </a>
          </div>
          {/* Mobile Menu Bar Footer - AddisSystems */}
          <div className="absolute bottom-2 right-1/2 block translate-x-1/2 cursor-default text-sm font-normal mdm:hidden">
            <p className="text-addispink">
              Addis<span className="text-addisblue">systems</span>
            </p>
          </div>
        </ul>
        <div className="flex items-center">
          <form className="mr-1 mdm:mr-1">
            <div className="flex cursor-pointer items-center rounded-md border border-addisblue ">
              <input
                id="search"
                className="min-w-[100px] max-w-[200px] origin-right overflow-hidden rounded-xl py-2 indent-2 outline-none duration-500 sm:max-w-[250]"
                type="text"
                name="Search"
                placeholder="search"
              />
              <FiSearch className=" mx-2 text-xl " />
            </div>
          </form>
          <div className="hidden items-center gap-x-2 mdm:flex">
            <div className="group relative">
              <span className=" flex min-w-[40px] cursor-default items-center justify-end text-xs hover:text-addispink">
                {lang[0]}
                <span className="ml-0.5 text-[10px] duration-500 group-hover:-rotate-180 ">
                  <FaChevronDown />
                </span>
              </span>{" "}
              <ul className="justify-cente absolute -right-1 flex h-0 flex-col items-center overflow-hidden rounded-b-md bg-white px-3 text-sm shadow-md duration-300 group-hover:h-20 group-hover:pt-3 mdm:min-w-[45px]">
                <li
                  className="float-right mt-1 cursor-pointer hover:text-addispink"
                  onClick={() => languageSwitcher(1)}
                >
                  {lang[1]}
                </li>
                <hr className="my-[6px] w-full border " />
                <li
                  className="float-right mb-3 cursor-pointer hover:text-addispink"
                  onClick={() => languageSwitcher(2)}
                >
                  {lang[2]}
                </li>
              </ul>
            </div>
            <a href="/login">
              <Button
                text={translate("log in")}
                py={8}
                width={120}
                bgHover="hover:bg-addisblue"
                textHover="text-addispink"
              />
            </a>
          </div>
          <button
            className="menu-btn z-40 cursor-pointer text-4xl  text-addispink mdm:hidden "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CgClose /> : <CgMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
