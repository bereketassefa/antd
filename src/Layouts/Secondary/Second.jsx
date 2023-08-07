import React from "react";
import { Outlet } from "react-router-dom";
import Setting from "../../Components/SettingComponent/Setting";

const  Second = () => {

  return (
    <div className="w-full p-0 m-0 flex  max-w-full items-center">
      <div className=" w-full flex items-start justify-center md:max-w-[1120px] gap-2 px-2 md:px-0  ">
        <Setting />
        <div className="w-full h-full   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Second