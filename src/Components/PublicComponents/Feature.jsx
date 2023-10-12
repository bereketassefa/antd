import React from "react";
import { useTranslation } from "../../Lang/Translater";

const Feature = ({ feature }) => {
  const { language } = useTranslation();
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={feature.delay * 100}
      className=" flex max-w-[330px] flex-col items-center bg-slate-100 p-4 pl-4 sm:p-6"
    >
      <div className=" flex h-10 w-10 items-center justify-center overflow-hidden text-4xl text-addispink">
        {feature.icon}
      </div>
      <h2 className=" mb-2 mt-4 text-base font-medium sm:text-lg ">
        {feature.title[language]}
      </h2>
      <p className=" text-sm sm:text-base ">{feature.paragraph[language]}</p>
    </div>
  );
};

export default Feature;
