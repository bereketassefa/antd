import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/PuplicImage/hero-image.png";

import ButtonChevron from "../../Components/PublicComponents/ButtonChevron";

import { useTranslation } from "../../Lang/Translater";

const Hero = () => {
  const { translate } = useTranslation();

  return (
    <header className=" bg-[#454262] px-4">
      <div className=" banner mx-auto flex max-h-[900px] min-h-[800px] max-w-7xl flex-col-reverse items-center justify-center  overflow-hidden py-10 sm:justify-end  sm:gap-y-4 md:max-h-[800px] md:min-h-[650px] md:flex-row md:justify-between md:gap-0 md:py-0 ">
        <div
          data-aos="fade-up"
          className=" w-full border-addispink px-8 text-center  sm:px-24 md:w-1/2 md:px-0 md:text-left"
        >
          <h1 className=" text-2xl font-semibold uppercase text-white md:text-4xl lg:text-5xl">
            {translate("facilitating")} <br className="heading-break hidden " />{" "}
            <span className="font-bold text-addispink">
              {translate("e-commerce")}
            </span>{" "}
            {translate("in ethiopia and")}
          </h1>
          <p className="text-slate-300">
            {/* Solve All Your Digital Transaction Needs */}
            {translate("hero para")}
          </p>
          <div className=" mt-7 sm:mb-12 md:mb-0">
            <Link to="demo-request" className="inline-block">
              <ButtonChevron text={translate("demo request")} py={14} px={30} />
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className=" my-4 -mt-20 w-[95%] max-w-[400px]  border-addispink sm:my-0 sm:max-w-[70%] md:max-w-[60%]"
        >
          <img className="" src={heroImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
