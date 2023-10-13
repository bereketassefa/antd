import React from "react";

import ButtonChevron from "../../Components/PublicComponents/ButtonChevron";
const NewsCard = ({ Title, news, image }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-100 md:grid-rows-2 md:flex-row">
      <div className=" flex   gap-1 border-2 pt-4">
        <div className="">
          <img
            src={image}
            alt=""
            className="   h-[300px] w-[300px] object-cover "
          ></img>
        </div>
        <div className="  h-[300px] w-[300px]">
          <h1 className="flex justify-center py-4 text-xl font-bold ">
            {Title}
          </h1>
          <p className="flex items-center justify-center text-sm ">{news}</p>
          <div className="mt-4 flex justify-end pr-2">
            <ButtonChevron text="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
