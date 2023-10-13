import React from "react";
import "aos/dist/aos.css";

const BannerPublic = ({ header, subtitle, bannerImage }) => {
  return (
    <header
      className=" -z-50 bg-addisbg"
      style={{
        background: `linear-gradient(90deg, rgba(69, 66, 98, 1), rgba(69, 66, 98, 0.5)), url('${bannerImage}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" mx-auto flex h-48 max-w-7xl items-center justify-center px-4 text-center sm:h-72 sm:justify-start sm:text-left">
        <div className="">
          <h1
            data-aos="fade-down"
            className=" text-3xl font-semibold text-white sm:text-5xl"
          >
            {header}
          </h1>
          <p data-aos="fade-up" className=" text-slate-300">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default BannerPublic;
