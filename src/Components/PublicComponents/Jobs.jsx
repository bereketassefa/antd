import React from "react";
import ButtonChevron from "../Components/ButtonChevron";
import {
  FaBusinessTime,
  FaCalendarTimes,
  FaCalendarCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = ({ vacancy }) => {
  return (
    <div className=" mx-auto my-8 flex max-w-6xl flex-col gap-4 rounded bg-slate-200 px-4 pb-8 pt-4 md:flex-row lg:gap-10 lg:p-8">
      <div className=" borde h-60 border-addispink md:h-auto md:max-w-[240px] lg:max-w-xs">
        <img
          src={vacancy.image}
          className="h-full w-full rounded-md object-cover"
          alt="Frontend web development"
        />{" "}
      </div>
      <div className=" borde flex w-full flex-col justify-between border-addispink">
        <div className="">
          <h2 className=" ca text-4xl font-semibold text-addispink">
            {vacancy.title}
          </h2>
          <p className="indent mt-2 text-justify">{vacancy.description}</p>
        </div>
        <hr className=" mt-4 border-addispink opacity-50 sm:hidden" />
        <div className="borde mt-4 flex flex-col items-center gap-4 border-addispink sm:flex-row sm:items-end sm:gap-0">
          <div className="flex items-end gap-4 sm:mr-6 lg:mr-16 lg:gap-8">
            <p className="flex flex-col items-center font-bold">
              <FaBusinessTime className="-mb-1 text-[25px] text-green-600" />
              Job Type
              <span className=" text-sm font-medium">{vacancy.jobType}</span>
            </p>
            <p className="flex flex-col items-center font-bold">
              <FaCalendarCheck className="text-[20px] text-green-600" />
              Posted Date
              <span className=" text-sm font-medium">{vacancy.postDate}</span>
            </p>
            <p className="flex flex-col items-center font-bold">
              <FaCalendarTimes className="text-[20px] text-addispink" />
              Dead Line
              <span className=" text-sm font-medium text-addispink">
                {vacancy.deadLine}
              </span>
            </p>
          </div>
          <div className="">
            <Link to="vacancy-apply">
              <ButtonChevron className="" text={"Apply"} width={150} py={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
