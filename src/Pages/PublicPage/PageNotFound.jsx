import React from "react";
import notFoundIcon from "../../assets/PuplicImage/SVG/404-icon.svg";
import { Link } from "react-router-dom";
import { CgUnavailable } from "react-icons/cg";
import { AiFillWarning } from "react-icons/ai";
import { TbFaceIdError } from "react-icons/tb";

const PageNotFound = () => {
  return (
    <main className="">
      <div className=" text-center">
        <div className="borde relative flex justify-center border-addispink px-4">
          <img
            className=" animate-swingx -mt-[60%] w-full max-w-xs origin-top animate-updown3 ssm:-mt-48 sm:-mt-72 sm:max-w-md md:max-w-lg"
            src={notFoundIcon}
            alt="Page not found"
          />
          <div className="borde absolute top-1 -z-10 h-full w-full border-addispink">
            <CgUnavailable className="absolute left-[13%] top-28  -rotate-12 animate-pulse animate-updown1 text-6xl opacity-40 md:left-[29%] md:text-8xl" />
            <AiFillWarning className="absolute right-[12%] top-48 rotate-6 animate-updown text-6xl text-addispink opacity-40 md:right-[26%] md:text-8xl" />
            <TbFaceIdError className="absolute bottom-8 left-[11%] rotate-12 animate-updown text-6xl text-addispink opacity-40 md:left-[26%] md:text-8xl" />
          </div>
        </div>
        <div className=" mt-6">
          <h1 className="text-3xl font-medium text-addisbg">
            <span className="text-5xl font-semibold text-addispink">
              Ooops!{" "}
            </span>
            Page Not Found.
          </h1>
          <div className=" my-16 flex items-center justify-center bg-addisbg py-8">
            <p className=" text-white">
              The page you are looking for might have been removed or
              temporarily unavialable.
              <br />
              Start over from the{" "}
              <Link
                className="text-addispink duration-300 hover:text-addishover"
                to="/"
              >
                home page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
