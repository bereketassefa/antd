import React from 'react'
import { Outlet } from "react-router-dom";
import SearchNav from '../../Components/Topbar/SearchAllCompo/SearchNav';
function SearchRoute() {
  return (
    <div className=" lg:max-w-[235px] h-auto p-0 m-0 flex  items-center border-2 border-slate-200 mt-2 bg-white drop-shadow-xl ">
      <div className=" w-full md:max-w-[310px] gap-2 px-2 md:px-0   ">
        <SearchNav />
        <div className="w-full h-full   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SearchRoute

