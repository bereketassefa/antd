import React from "react";
import { Outlet } from "react-router-dom";
import Setting from "../../Components/SettingComponent/Setting";

const  Second = () => {

  return (
    <div className="mt-5 w-full p-0 m-0 flex  max-w-full items-center">
      <div className={`${window.innerWidth < 640 ? "flex-col gap-4  ":"h-full w-full flex items-start justify-center md:max-w-[1120px] gap-2 px-2 md:px-0  "} scrollbar-hide`}>
        <Setting  />
        <div className="dark:bg-[#1b1f23] md:w-[795px] w-full h-full mt-16 md:mt-0 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Second