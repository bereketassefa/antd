import React from "react";
import BannerPublic from "../../Components/PublicComponents/BannerPublic";

import Heading from "../../Components/PublicComponents/Heading";

import FaqList from "../../Components/PublicComponents/FaqList";

import { faqs } from "../../PublicData/data";

import faqbanner from "../../assets/PuplicImage/faq-banner-01-01.jpg";

import LearnMore from "../../Components/PublicComponents/LearnMore";

const Faq = () => {
  const handleSlide = (id) => {
    const answer = document.getElementById(id);
    const arrow = document.getElementById(`arrow${id}`);
    // const question = document.getElementById(`question${id}`);

    arrow.classList.toggle("rotate");
    if (answer.style.height !== "0px") {
      answer.style.height = "0px";
      answer.style.overflow = "hidden";
      answer.style.paddingBottom = "0px";
      answer.style.paddingTop = "0px";
      // arrow.classList.add("rotate");
    } else {
      answer.style.height = answer.scrollHeight + "px";
      // answer.style.paddingBottom = "10px";
      // answer.style.paddingTop = "14px";
    }

    //   const Faq = () => {
    // const [click, setClick] = useState(false)

    // const toggle = (index) => {
    //   if (click === index) {
    //     return setClick(null)
    //   }
    //   setClick(index)
    // }
  };
  return (
    <main className="">
      <BannerPublic bannerImage={faqbanner} header={"FAQs"} />
      <div className=" mx-auto max-w-7xl ">
        <Heading head={"Frequently"} headtwo={"Asked Questions"} />
        <div className="  mx-auto mb-12 max-w-[850px] px-2">
          <FaqList faqData={faqs} handleSlide={handleSlide} />
        </div>
        <LearnMore />
      </div>
    </main>
  );
};

export default Faq;
