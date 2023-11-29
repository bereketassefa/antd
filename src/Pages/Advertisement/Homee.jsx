import { Button } from "antd";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Homee() {
  return (
    <div>
      <div className="flex flex-row space-x-4 content-center my-5 mx-2">
        <NavLink
          to="dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "text-gray-400" : isActive ? "text-black font-bold" : ""
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="management"
          className={({ isActive, isPending }) =>
            isPending ? "text-gray-400" : isActive ? "text-black font-bold" : ""
          }
        >
          Management
        </NavLink>
        <NavLink
          to="report"
          className={({ isActive, isPending }) =>
            isPending ? "text-gray-400" : isActive ? "text-black font-bold" : ""
          }
        >
          Report
        </NavLink>
        <NavLink
          to="accountSetting"
          className={({ isActive, isPending }) =>
            isPending ? "text-gray-400" : isActive ? "text-black font-bold" : ""
          }
        >
          Account Setting
        </NavLink>
        <Button type="primary" danger>
          Create Advertisement
        </Button>
      </div>
      <Outlet />
    </div>
  );
}

export default Homee;
