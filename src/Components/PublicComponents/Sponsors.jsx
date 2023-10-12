import React from "react";

import addisPayLogo from "../../assets/PuplicImage/addispay-logo2.jpg";

import abyssiniaLogo from "../../assets/PuplicImage/abyssinia-logo2.jpg";
 
import cbeLogo from "../../assets/PuplicImage/cbe-logo2.jpg";

import insaLogo from "../../assets/PuplicImage/insa-logo2.jpg";

import starTimeLogo from "../../assets/PuplicImage/starTimes.jpg";
const Sponsors = () => {
  return (
    <section className=" my-10 bg-slate-100 px-2 py-6 sm:py-10 lg:px-0">
      <div className=" mx-auto flex max-w-7xl justify-evenly gap-2">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className=" max-h-36 w-48 rounded-md border-b-4 border-addispink bg-white shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl"
        >
          <img
            className="flex h-full items-center justify-center rounded-md object-contain"
            src={cbeLogo}
            alt="commercial bank of ethiopia logo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className=" max-h-36 w-48 rounded-md border-b-4 border-addispink bg-white shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl"
        >
          <img
            className="flex h-full items-center justify-center rounded-md object-contain"
            src={addisPayLogo}
            alt="addis pay logo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className=" max-h-36 w-48 rounded-md border-b-4 border-addispink bg-white shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl"
        >
          <img
            className="flex h-full items-center justify-center rounded-md object-contain"
            src={insaLogo}
            alt="ethiopian information network and security logo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className=" max-h-36 w-48 rounded-md border-b-4 border-addispink bg-white shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl"
        >
          <img
            className="flex h-full items-center justify-center rounded-md object-contain"
            src={abyssiniaLogo}
            alt="abyssinia bank logo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className=" max-h-36 w-48 rounded-md border-b-4 border-addispink bg-white shadow-lg duration-500 hover:scale-[1.03] hover:shadow-xl"
        >
          <img
            className="flex h-full items-center justify-center rounded-md object-contain"
            src={starTimeLogo}
            alt="abyssinia bank logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
