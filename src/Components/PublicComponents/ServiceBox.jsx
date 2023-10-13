import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { useTranslation } from "../../Lang/Translater";

const ServiceBox = ({
  head,
  title,
  h1,
  h2,
  para1,
  para2,
  path,
  icon1,
  icon2,
}) => {
  const { translate, language, setLanguage } = useTranslation();
  return (
    <div className=" rounded-xl border-l-4 border-addisblue bg-addispink bg-opacity-5 px-3 py-6 sm:px-7 ">
      <h3 className=" text-2xl font-semibold text-addisblue">{head}</h3>
      <p className="">{title}</p>
      <div className=" my-6 grid gap-y-4">
        <div className=" flex items-start">
          <div className="mr-2 text-[30px] text-addispink">{icon1}</div>
          <div className=" basis-[90%]">
            <h4 className="text-xl font-medium">{h1}</h4>
            <p className="">{para1}</p>
          </div>
        </div>
        <div className=" flex items-start">
          <div className="mr-2 text-[28px] text-addispink">{icon2}</div>
          <div className=" basis-[90%]">
            <h4 className="text-xl font-medium">{h2}</h4>
            <p className="">{para2}</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end ">
        <Link
          to={path}
          className="group flex items-center rounded-[4px] bg-addispink px-3 py-2 text-white duration-300 hover:bg-[#F60B65] "
        >
          {translate("learn-more")}
          <HiChevronRight className="mt-1 text-xl duration-500 group-hover:translate-x-1 " />
        </Link>
      </div>
    </div>
  );
};

export default ServiceBox;
