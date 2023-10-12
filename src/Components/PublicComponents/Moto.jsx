import React from "react";
 
import asset1 from "../../assets/PuplicImage/icon-1.png";
 
import asset2 from "../../assets/PuplicImage/icon-2.png";
 
import asset3 from "../../assets/PuplicImage/icon-3.png";
 
import asset4 from "../../assets/PuplicImage/icon-4.png";
 
import motoImage from "../../assets/PuplicImage/about-us.jpg";
import { useTranslation } from "../../Lang/Translater";
const Moto = () => {
  const { translate } = useTranslation();
  return (
    <div
      className="my-14 w-full bg-[#454262] px-4 pt-12 md:pl-8 mmd:py-0"
      style={{
        background: `linear-gradient(90deg, rgba(69, 66, 98, 1), rgba(69, 66, 98, 0.5)), url('${motoImage}')`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-80 relative mx-auto flex h-96  max-w-7xl flex-col items-center px-2 ssm:max-h-80 sm:items-start mmd:flex-row mmd:items-center lg:px-0">
        <div className=" max-w-[400px] text-center sm:text-left">
          <h2
            data-aos="fade-up"
            className=" text-3xl font-semibold text-white md:text-4xl"
          >
            {translate("Facilitate commerce for Ethiopia and beyond.")}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className=" text-slate-300"
          >
            {translate("moto-paragraph")}
          </p>
        </div>
        <div className="">
          <div className="absolute bottom-6 right-[10%] h-20  w-28 origin-center rotate-3 animate-updown ssm:h-28 ssm:w-36 sm:bottom-10 sm:right-20 mmd:right-64  mmd:top-8 lg:right-80 ">
            <img className=" w-full object-contain " src={asset3} alt="icons" />
          </div>
          <div className=" absolute right-20 top-12 hidden h-16 w-24 -rotate-12 animate-updown1 mmd:block  lg:right-8">
            <img className=" w-full object-contain " src={asset4} alt="icons" />
          </div>
          <div className="absolute bottom-14 right-[40%] hidden h-12 w-20 -rotate-3 animate-updown3 mmd:block  lg:right-[550px]">
            <img className=" w-full object-contain " src={asset2} alt="icons" />
          </div>
          <div className="lg:right-50 absolute bottom-12 left-[5%] h-20  w-28 -rotate-6 animate-updown1 sm:left-auto sm:right-16 sm:top-4 mmd:bottom-16 mmd:left-auto mmd:right-40 mmd:top-auto ">
            <img className=" w-full object-contain " src={asset1} alt="icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moto;
