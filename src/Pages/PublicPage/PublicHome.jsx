import React, { useEffect } from "react";

import Hero from "../../Components/PublicComponents/Hero";

import Heading from "../../Components/PublicComponents/Heading";

import posimage from "../../assets/PuplicImage/M-pos webbb.png";
 
import erpimage from "../../assets/PuplicImage/ERP3-03.png";
 
import invoiceimage from "../../assets/PuplicImage/Addis e-invoice-01.png";

import businessinteligence from "../../assets/PuplicImage/business inteligent.png";

import ServiceBox from "../../Components/PublicComponents/ServiceBox";

import Moto from "../../Components/PublicComponents/Moto";

import Sponsors from "../../Components/PublicComponents/Sponsors";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { SiSpeedtest } from "react-icons/si";
import { TbCirclesRelation } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { BiTime } from "react-icons/bi";
import { GiUpgrade } from "react-icons/gi";
import { TbArrowsExchange } from "react-icons/tb";

import LearnMore from "../../Components/PublicComponents/LearnMore";

import { useTranslation } from "../../Lang/Translater";
import "aos/dist/aos.css";

const PublicHome = () => {
  const { translate, language } = useTranslation();

  return (
    <main className="">
      <Hero />
      <div>
        <Heading
          head={translate("work with us")}
          headtwo={language === "Eng" ? "with us?" : ""}
          para={translate("work with us para")}
        />
      </div>

      <div>
        <Heading
          head={translate("our service")}
          headtwo={translate("we give")}
        />
      </div>
      <div className="mx-auto my-20 flex max-w-7xl flex-col items-center justify-between gap-x-4 overflow-hidden p-6 md:flex-row lg:gap-x-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className=" w-[90%] max-w-[550px] md:w-1/2"
        >
          <img src={posimage} alt="pos service illustration" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="card-container w-[96%] max-w-[480px] rounded-xl shadow-[0_6px_25px_rgba(0,0,0,0.1)] md:w-1/2 "
        >
          <ServiceBox
            head={translate("POS service")}
            title={translate("pos-p1")}
            icon1={<HiOutlineEmojiHappy />}
            icon2={<SiSpeedtest />}
            path={"pos-service"}
            h1={translate("posh1")}
            para1={translate("pos-para1")}
            h2={translate("pos-h2")}
            para2={translate("pos-para2")}
          />
        </div>
      </div>
      <div className="mx-auto my-20 flex max-w-7xl flex-col items-center justify-between gap-x-4 overflow-hidden p-6 md:flex-row-reverse lg:gap-x-10 ">
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="w-[90%] max-w-[550px] md:w-1/2 "
        >
          <img
            className=" h-full max-h-[450px] "
            src={erpimage}
            alt="pos service illustration"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="card-container w-[96%] max-w-[480px] rounded-xl shadow-[0_6px_25px_rgba(0,0,0,0.1)] md:w-1/2"
        >
          <ServiceBox
            head={translate("ERP service")}
            title={translate("Manage day-to-day activities easly")}
            icon1={<TbCirclesRelation />}
            icon2={<FaMoneyBillWave />}
            path={"erp-service"}
            h1={translate("Cooperate to grow more quickly")}
            para1={translate("ERP service para")}
            h2={translate("Lower Cost")}
            para2={translate("Lower Cost-para")}
          />
        </div>
      </div>
      <div className="mx-auto my-20 flex max-w-7xl flex-col items-center justify-between gap-x-4 overflow-hidden p-6 md:flex-row lg:gap-x-10 ">
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="w-[90%] max-w-[500px] md:w-1/2 "
        >
          <img src={invoiceimage} alt="pos service illustration" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          // data-aos-offset="150"
          className="card-container w-[96%] max-w-[480px] rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] md:w-1/2"
        >
          <ServiceBox
            head={translate("Electronic Invoice")}
            title={translate("Electronic Invoice-title")}
            icon1={<VscServerProcess />}
            icon2={<BiTime />}
            path={"electronic-invoice"}
            h1={translate("Automation")}
            para1={translate("Automation-para")}
            h2={translate("Shorter Payment Cycles")}
            para2={translate("Shorter Payment Cycles-para")}
          />
        </div>
      </div>
      <div className="mx-auto my-20 flex max-w-7xl flex-col items-center justify-between gap-x-4 overflow-hidden p-6 md:flex-row-reverse lg:gap-x-10">
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="w-[90%] max-w-[550px] md:w-1/2 "
        >
          <img
            className=" h-full max-h-[450px] "
            src={businessinteligence}
            alt="pos service illustration"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="card-container w-[96%] max-w-[480px] rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] md:w-1/2 "
        >
          <ServiceBox
            head={translate("Business Intelligence")}
            title={translate("Manage day-to-day activities easly")}
            icon1={<GiUpgrade />}
            icon2={<TbArrowsExchange />}
            path={"business-intelligence"}
            h1={translate("Increased revenue")}
            para1={translate("Increased revenue-para")}
            h2={translate("Transforms tax compliance")}
            para2={translate("Transforms tax compliance-para")}
          />
        </div>
      </div>
      <Moto />
      <LearnMore />
      <Sponsors />
    </main>
  );
};

export default PublicHome;
