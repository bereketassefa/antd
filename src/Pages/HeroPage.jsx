import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/final logo-04.png";
import icon from "../assets/image/bizify spot phone logo-16.png";

import Button from "../Components/HeroComp/Button";
function HeroPage() {
  return (
    <nav className=" sticky top-0 z-40 w-full bg-slate-50 px-6 opacity-100 shadow-md ">
      <div className=" max-w- [1380px] container z-30 mx-auto flex h-20 items-center justify-between  font-medium  ">
        <div className="-ml-1 mt-1  duration-300 hover:scale-[1.02] md:w-[190px]  ">
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
        <ul className="  flex  gap-14  ">
          <li className="hover:text-primary">
            <Link to="about-us">Home </Link>
          </li>

          <li className="hover:text-primary">
            <Link to="contact">About</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="contact">Services</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-6 ">
          <div className="">
            <Link to="contact">Login</Link>
          </div>
          <div className=" ">
            <div>
              <Link to="www.bizfyspot.com">
                <Button text="Sign up " py={8} width={150} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeroPage;
