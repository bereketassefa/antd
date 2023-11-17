import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../../Components/Topbar/topbar";
import BottomNav from "./BottomNav";

export default function Primary() {
  return (
    <div className="h-screen  scrollbar-hide  scroll-smooth dark:bg-black bg-white relative w-full p-0 m-0 
    flex flex-col max-w-full items-center ">
      <div className="fixed w-full z-10 bg-green-100 ">
        <Topbar />
      </div>
      

      <div className="mt-[20px] sm:mt-[65px] w-full flex items-start justify-center md:max-w-[1120px] gap-2 md:px-0  ">
        <div className="w-full  h-full  ">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav/>

    </div>
  );
}
