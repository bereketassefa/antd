import React from 'react'
import { Outlet } from "react-router-dom";
import SearchNav from '../../Components/Topbar/SearchAllCompo/SearchNav';
function SearchRoute() {
  return (
    <div className="  mt-10 sticky top-[75px]  ">
      <div className="  flex flex-col md:flex-row  md:max-w-[310px] gap-4 px-2 ">
        <SearchNav />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SearchRoute

