import React from "react";
import { useTranslation } from "../../Lang/Translater";
import { FiChevronDown } from "react-icons/fi";

const FaqList = ({ faqData, handleSlide }) => {
  const { language } = useTranslation();

  console.log(language);

  const faqItems = faqData.map((faq) => (
    <div data-aos="fade-up" data-aos-offset="100" key={faq.id}>
      <div className=" mb-4 mt-10 w-full bg-addispink py-4">
        <h4 className=" text-center text-lg font-medium text-white ">
          {faq.catagory[language]}
        </h4>
      </div>

      {faq.content.map((list) => (
        <div
          className="group mx-3 my-2 cursor-pointer bg-slate-200 duration-300 hover:bg-slate-300"
          onClick={() => handleSlide(list.id)}
          key={list.id}
        >
          <div className="flex items-center justify-between px-4 py-4 ">
            <h4 id={"question" + list.id} className="group-hover:font-semibold">
              {list.question[language]}
            </h4>
            <div
              id={"arrow" + list.id}
              className=" text-2xl text-addispink duration-500"
            >
              <FiChevronDown />
            </div>
          </div>
          <div
            id={list.id}
            style={{ height: 0, overflow: "hidden" }}
            className="rounded-b-md bg-addispink px-4 duration-500"
          >
            <h4 className="py-4 text-white">{list.answer[language]}</h4>
          </div>
        </div>
      ))}
    </div>
  ));
  return <>{faqItems}</>;
};

export default FaqList;
