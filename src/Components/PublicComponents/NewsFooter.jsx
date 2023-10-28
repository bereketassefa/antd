import React from "react";
import { TbManualGearbox, TbDeviceWatchStats } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineFlag } from "react-icons/ai";

import logo from "../../assets/PuplicImage/android-chrome-192x192.png";
function NewsFooter() {
  return (
    <div>
      <section className=" my-10 bg-slate-100 px-2 py-6 sm:py-10 lg:px-0">
        <div className=" mx-auto  max-w-7xl grid  gap-6 grid-cols-1 sm:grid-row-2 md:grid-cols-4  ">
          <div className="  flex items-center  justify-center gap-8 rounded-md bg-white  p-12 shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl">
            <div className=" h-10 w-10 ">
              <img src={logo} alt="" className="object-cover" />
              {/* <TbManualGearbox  className="text-5xl"/> */}
            </div>
            <p className="text-xl font-semibold">AddisPay</p>
            <div>
              <BsArrowRight className="text-4xl" />
            </div>
          </div>
          <div className="  flex items-center  justify-center gap-8 rounded-md bg-white  p-12 shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl">
            <div>
              <TbDeviceWatchStats className="text-5xl" />
            </div>
            <p className="text-xl font-semibold">Gadgets</p>
            <div>
              <BsArrowRight className="text-4xl" />
            </div>
          </div>
          <div className=" flex items-center  justify-center gap-8 rounded-md bg-white  p-12 shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl">
            <div>
              <TbManualGearbox className="text-5xl" />
            </div>
            <p className="text-xl font-semibold">Apps Review</p>
            <div>
              <BsArrowRight className="text-4xl" />
            </div>
          </div>
          <div className="flex items-center  justify-center gap-8 rounded-md bg-white  p-12 shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl">
            <div>
              <AiOutlineFlag className="text-5xl" />
            </div>
            <p className="text-xl font-semibold">Innovation</p>
            <div>
              <BsArrowRight className="text-4xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsFooter;
