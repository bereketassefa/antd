import React from "react";
import { Outlet } from "react-router-dom";

export default function SignupLayout() {
    return (
      <div className=" flex max-w-screen-2xl mx-auto  justify-evenly h-screen  ">
        <div className="w-full h-full   ">
          <Outlet />
        </div>
      </div>
    );
}
