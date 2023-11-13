import React from "react";
import image from "../../assets/image/profile.png";
import search from "../../assets/image/handsheck.png";
import cheng from "../../assets/image/channel.png";
import db from "../../assets/image/opprtunities.png";
import staf from "../../assets/image/bgheroside1.png";
import line from "../../assets/image/line.png";
function Heroside2() {
  return (
    <div className="hidden lg:block lg:w-1/2   h-auto ">
      <div className="items-center flex-col justify-start overflow-hidden">
        <div
          className="  mx-4 flex flex-col gap-20 bg-[url('/images/staf.jpg')] w-full md:h-[738px]  object-cover bg-cover bg-center bg-opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(50, 34, 198, 0.8), rgba(50, 34, 198, 0.8)), url(${staf})`,
          }}
        >
          <div className="mx-10 my-4 ">
            <div className="flex  mt-4 gap-3">
              <img
                className="w-[50px] h-[50px] object-contain"
                src={image}
                alt="image"
              />

              <div className="flex-col">
                <h1 className="  mb-3 text-white font-sans not-italic font-bold leading-none text-[20px]">
                  PRFILE CUSTOMIZATION
                </h1>
                <p className="text-white font-sans not-italic font-normal leading-none">
                  Create a unique business profile that showcases <br /> your
                  brand and skills
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <img
              className="p-[2px] w-[50px] h-[50px] object-contain"
              src={search}
              alt="image"
            />

            <div className="flex-col ">
              <h1 className=" mb-3 text-white font-sans not-italic font-bold leading-none text-[20px]">
                ENGAGE AND CONNECT
              </h1>
              <p className="text-white font-sans not-italic font-normal leading-none">
                Interact, share insights, and connect
                <br /> With B2B professionals. Engage in discussions, <br />
                showcase expertise, and expand your network.
              </p>
            </div>
          </div>
          <div>
            <div className="flex  gap-3 items-center">
              <img
                className="p-[2px] w-[50px] h-[50px] object-contain"
                src={cheng}
                alt="image"
              />

              <div className="flex-col">
                <h1 className="  mb-3 text-white font-sans not-italic font-bold leading-none text-[20px]">
                  TARGET ADVERTISEMENT
                </h1>
                <p className="text-white font-sans not-italic font-normal leading-none">
                  Reach your target audience with precision targeting. <br />
                  Promote your products and services to drive your business
                  forward.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <img
              className=" object-contain w-[50px] h-[50px]"
              src={db}
              alt="image"
            />

            <div className="flex-col">
              <h1 className="  mb-3 text-white font-sans not-italic font-bold leading-none text-[20px]">
                BUSINESS OPPORTUNITIES
              </h1>
              <p className="text-white font-sans not-italic font-normal leading-none">
                Discover new opportunities to elevate your business.
                partnerships, <br />
                Unlock growth potential through ventures, <br />
                and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroside2;
