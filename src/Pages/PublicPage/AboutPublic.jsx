import React from "react";

import BannerPublic from "../../Components/PublicComponents/BannerPublic";

import Button from "../../Components/PublicComponents/Button";

import aboutImg from "../../assets/PuplicImage/1x/about-us_1.png";

import Moto from "../../Components/PublicComponents/Moto";

import Sponsors from "../../Components/PublicComponents/Sponsors";

import aboutImage from "../../assets/PuplicImage/about-us.jpg";

import Heading from "../../Components/PublicComponents/Heading";

import { useTranslation } from "../../Lang/Translater";

const AboutPublic = () => {
  const { translate, language } = useTranslation();
  return (
    <main className="">
      <BannerPublic
        bannerImage={aboutImage}
        header={translate("about us")}
        subtitle={translate("about-us subT")}
      />

      <div>
        <Heading
          head={translate("Who")}
          headtwo={translate("WE ARE")}
          para={translate("learn little about us")}
        />
      </div>
      <div className=" mx-auto max-w-5xl ">
        <div className="mb-12 mt-10 flex flex-col items-center justify-center gap-5 overflow-hidden md:mt-16 md:flex-row md:justify-between">
          <div data-aos="fade-right" className="w-[90%] max-w-[450px] md:w-1/2">
            <img
              className=" w-full"
              src={aboutImg}
              alt="pos service illustration"
            />
          </div>
          <div
            data-aos="fade-left"
            // data-aos-offset="100"
            className="card-container flex min-h-[350px] w-[96%] max-w-[480px] flex-col justify-between bg-slate-200 px-3  pb-4 pt-7 sm:px-7 md:w-1/2"
          >
            <div className="">
              <h3 className=" mb-3 text-center text-2xl font-medium md:text-left">
                {translate("About the company")}
              </h3>
              <p className="">{translate("About the company para")}</p>
            </div>
            <div className=" mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              <Button
                text={translate("POS System")}
                bgHover={"hover:bg-addisblue"}
                // textHover={"addispink"}
              />
              <Button
                text={translate("ERP System")}
                bgHover={"hover:bg-addisblue"}
                // textHover={"addispink"}
              />
              <Button
                text={translate("Electronic Invoice")}
                bgHover={"hover:bg-addisblue"}
                // textHover={"addispink"}
              />
              <Button
                text={translate("Business Intelligence")}
                bgHover={"hover:bg-addisblue"}
                // textHover={"addispink"}
              />
            </div>
          </div>
        </div>

        <div className="my-16 flex flex-col items-center justify-center gap-3 px-2 md:flex-row md:items-stretch md:justify-between lg:gap-5 ">
          <div
            data-aos="fade-up"
            className=" w-full max-w-md bg-slate-100 pb-4 pl-4 pt-4 md:max-w-[330px] md:p-6"
          >
            <h2 className="mb-2 text-center text-base font-medium sm:text-lg md:text-left ">
              {translate("Our Mission and Objective")}
            </h2>
            <ul className="">
              <li className="text-sm sm:text-base">
                {translate("Our Mission and Objective paragraph")}
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className=" w-full max-w-md bg-slate-100 pb-4 pl-4 pt-4 md:max-w-[330px] md:p-6"
          >
            <h2 className="mb-2 text-center text-base font-medium sm:text-lg md:text-left ">
              {translate("Our vision")}
            </h2>
            <ul className="">
              <li className="text-sm sm:text-base">
                {translate("Our vision paragraph")}
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className=" w-full max-w-md bg-slate-100 pb-4 pl-4 pt-4 md:max-w-[330px] md:p-6"
          >
            <h2 className="mb-2 text-center text-base font-medium sm:text-lg md:text-left ">
              {translate("Core values")}
            </h2>
            <ul className="">
              <li className="flex items-center justify-start text-sm sm:text-base">
                <div className=" mr-2 h-4 w-4 rounded-full bg-addispink"></div>
                {translate("Trust")}
              </li>
              <li className="flex items-center justify-start text-sm sm:text-base">
                <div className=" mr-2 h-4 w-4 rounded-full bg-addispink"></div>
                {translate("Responsiveness")}
              </li>
              <li className="flex items-center justify-start text-sm sm:text-base">
                <div className=" mr-2 h-4 w-4 rounded-full bg-addispink"></div>
                {translate("Transparency")}
              </li>
              <li className="flex items-center justify-start text-sm sm:text-base">
                <div className=" mr-2 h-4 w-4 rounded-full bg-addispink"></div>
                {translate("Security")}
              </li>
              <li className="flex items-center justify-start text-sm sm:text-base">
                <div className=" mr-2 h-4 w-4 rounded-full bg-addispink"></div>
                {translate("Creativity and value addition")}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Moto />
      <Sponsors />
    </main>
  );
};

export default AboutPublic;
