import React from 'react'
import { Outlet } from "react-router-dom";
import SearchNavPublic from "../../../Components/PublicComponents/NavComponenet/SearchPublicCompo/SearchNavPublic";
function SearchRoutePublic() {
  return (
    <div className="  mt-5   justify-center items-center  mx-16 ">
      <div className="  flex flex-col md:flex-row  md:max-w-[310px] gap-4 px-2 ">
        <SearchNavPublic />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SearchRoutePublic

