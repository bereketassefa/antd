import React from "react";
import { Outlet } from "react-router-dom";
import RelationPage from "../../Pages/RelationPage";

const RelationRoute = () => {
  return (
    <div className="lg:px-8 lg:max-w-[835px] h-auto p-0 m-0 flex  items-center border-2 border-slate-200 mt-2 bg-white drop-shadow-xl ">
      <div className=" w-full md:max-w-[1120px] gap-2 px-2 md:px-0   ">
        <RelationPage />
        <div className="w-full h-full   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RelationRoute;
