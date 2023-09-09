import React from "react";
import { Outlet } from "react-router-dom";
import Setting from "../../Components/SettingComponent/Setting";

const  Second = () => {

  return (
    <div className="mt-5 w-full p-0 m-0 flex  max-w-full items-center">
      <div className="h-full w-full flex items-start justify-center md:max-w-[1120px] gap-2 px-2 md:px-0  ">
        <Setting  />
        <div className="dark:bg-[#1b1f23] w-[795px] h-full   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Second