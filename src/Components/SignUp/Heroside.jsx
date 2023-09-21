import React from "react";
import image from "../../assets/image/ampol.png";
import image2 from "../../assets/image/arrow2.png";
import search from "../../assets/image/serch1.1.png";
import cheng from "../../assets/image/arrow2.2.png";
import db from "../../assets/image/db2.png";
import Arrow3 from "../../assets/image/arrow3.png";
import staf from "../../assets/image/landin page login 3.png";
function Heroside() {
  return (
    <div className=" hidden lg:block lg:w-1/2  ">
      <div className="items-center flex-col justify-center  overflow-hidden ">
        <div>
          <div className="flex justify-center mt-4 ">
            <div className="w-[55px] h-[55px]  m-2  ">
              <img
                className="  w-[50px] h-[50px] object-contain"
                src={image}
                alt="image "
              />
            </div>
            <div className="flex-col">
              <h1 className=" text-[#3222C6] font-sans not-italic font-bold leading-none text-[20px] ">
                THINKING
              </h1>
              <p className="text-[#3222C6] font-sans not-italic font-normal leading-none ">
                Here we wish to develop a systems <br /> understanding of what{" "}
                we are dealing with.
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center  ">
            <div className="w-[130px] h-130[px] rotate-[109deg]  ">
              <img
                className="w-[130px] h-[130] rotate-[-111.221deg] object-contain"
                src={image2}
                alt="image "
              />
            </div>
            <div className="w-[55px] h-[55px]  m-2 ">
              <img
                className=" p-[2px]   w-[50px] h-[50px] object-contain"
                src={search}
                alt="image "
              />
            </div>
            <div className="flex-col">
              <h1 className=" text-[#3222C6] font-sans not-italic font-bold leading-none text-[20px] ">
                ENQUIRY
              </h1>
              <p className="text-[#3222C6] font-sans not-italic font-normal leading-none ">
                Here we want to look into the <br /> workings of the current
                system <br />
                and map it out
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center ">
              <div className="w-[55px] h-[55px] m-2 ">
                <img
                  className="p-[2px]   w-[50px] h-[50px] object-contain "
                  src={cheng}
                  alt="image "
                />
              </div>
              <div className="flex-col">
                <h1 className=" text-[#3222C6] font-sans not-italic font-bold leading-none text-[20px] ">
                  CHANGE
                </h1>
                <p className="text-[#3222C6] font-sans not-italic font-normal leading-none ">
                  Now we want to start to look at the <br /> transition and
                  places to intervene
                </p>
              </div>
              <div className="w-[130px] h-[130px] rotate-[109deg]">
                <img
                  className="w-[150px] h-[150] rotate-[-108.569deg] object-contain"
                  src={Arrow3}
                  alt="image "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-[130px] h-130[px] rotate-[109deg]">
              <img
                className="w-[130px] h-[130] rotate-[-111.221deg] object-contain"
                src={image2}
                alt="image "
              />
            </div>
            <div className="w-[55px] h-[55px] m-2  ">
              <img
                className="bg-slate-100  object-contain w-[50px] h-[50px]    "
                src={db}
                alt="image "
              />
            </div>
            <div className="flex-col">
              <h1 className=" text-[#3222C6] font-sans not-italic font-bold leading-none text-[20px] ">
                DESIGN
              </h1>
              <p className="text-[#3222C6] font-sans not-italic font-normal leading-none ">
                Now think about how to <br />  design and develop <br />{" "}
               a new platform
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-20 -ml-6 ">
          <img src={staf} alt="image" className="object-contain  w-[360px]" />
        </div>
      </div>
    </div>
  );
}

export default Heroside;
