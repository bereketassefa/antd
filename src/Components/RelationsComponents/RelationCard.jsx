import React from "react";
const RelationCard = ({ title, image }) => {
  return (
    <div className="  border-2 border-blue-700 flex items-center justify-center gap-2  w-[185px] min-h-[148px]  flex-col duration-300 ">
      <div className=" w-20 h-20 flex items-center justify-center ">
        <img
          src={image}
          alt="Compang Name"
          className="w-[78px] md:w-[78px] lg:w-full object-cover"
        />
      </div>
      <h2 className="  font-bold text-[#000] text-center text-[17px]">{title}</h2>
    </div>
  );
};

export default RelationCard;
