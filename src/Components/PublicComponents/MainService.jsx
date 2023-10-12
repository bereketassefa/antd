import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const MainService = ({ heading, title, paragraph, btntext, heroImage }) => {
  const navigate = useNavigate();
  const func = () => {
    navigate("demo-request");
    console.log("Done");
  };
  return (
    <main className="">
      <header className=" bg-[#454262] px-4">
        <div className=" sm:banner sm:h-ful sm:max-[1280px] sm:gap-y mx-auto flex h-screen max-h-[678px] max-w-7xl  flex-col items-center justify-start  overflow-hidden border-addispink sm:justify-center md:flex-row md:justify-between md:gap-0 ">
          <div className=" mt-6 w-full border-addispink px-8  text-center sm:mt-12 sm:px-24 md:w-1/2 md:px-0 md:text-left">
            <h1 className=" text-2xl font-semibold uppercase text-white md:text-4xl">
              {heading}
            </h1>
            <p className="text-slate-300">{title}</p>
            <p className="mt-4 font-light text-slate-200">{paragraph}</p>
            <div className=" mt-7 hidden sm:mb-12 md:mb-0 md:block">
              <Link onClick={() => func()}>
                <Button
                  text={"Demo request"}
                  py={12}
                  width={210}
                  bgHover={"hover:bg-white"}
                  textHover={"addispink"}
                />
              </Link>
            </div>
          </div>
          <div className=" mt-4 w-[95%] max-w-[400px] border-addispink  sm:my-0 sm:max-w-[70%] md:max-w-[60%]">
            <img
              className=" h-full w-full object-contain"
              src={heroImage}
              alt=""
            />
          </div>

          <div className="mb-12 md:hidden">
            <Link to="demo-request">
              <Button
                text={"Demo request"}
                py={12}
                width={210}
                bgHover={"hover:bg-white"}
                textHover={"addispink"}
              />
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
};

export default MainService;
