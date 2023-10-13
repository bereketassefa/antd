import React from "react";
import Button from "./Button";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

import { useTranslation } from "../../Lang/Translater";

const Footer = () => {
  const { translate, language, setLanguage } = useTranslation();
  const date = new Date();
  return (
    <footer className=" [#454262] black bg-black pb-8 pt-12 text-white">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-x-1 gap-y-7 px-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        <ul className="">
          <h4 className=" text-lg font-semibold text-addispink">
            {translate("about us")}
          </h4>
          <li className=" w-fit pr-20 text-base font-light text-slate-50">
            Addis Ababa
            <br />
            Megenagna to 22 road <br />
            Efrata building 4<sup>th</sup> Floor
            <br />
            <Link
              to="contact"
              className=" group flex items-center text-addispink duration-500  hover:text-slate-200"
            >
              <BiChevronRight className="text-xl  " /> {translate("See on map")}
            </Link>
          </li>
          <div className="mt-2">
            <h4 className="text-base font-semibold">Get in touch</h4>
            <div className="mt-1 flex gap-4">
              <FaFacebookF className="text-white duration-300 hover:scale-125 hover:text-addispink" />
              <FaTwitter className="text-addispink duration-300 hover:scale-125 hover:text-white" />
              <FaLinkedinIn className="text-addispink duration-300 hover:scale-125 hover:text-white" />
              <FaInstagram className="text-addispink duration-300 hover:scale-125 hover:text-white" />
            </div>
          </div>
        </ul>
        <ul className="">
          <h4 className="text-lg font-semibold text-addispink">
            {translate("Product and Services")}
          </h4>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="pos-service">{translate("POS as a Service")}</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="erp-service"> {translate("ERP as a Service")}</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="electronic-invoice">
              {translate("Electronic Invoice")}
            </Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="m-pos">{translate("Mpos head")}</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="business-intelligence">
              {translate("Business Intelligence")}
            </Link>
          </li>
          <h4 className="text-base  font-semibold text-addispink">
            {translate("Working Hours")}
          </h4>
          <li className=" w-fit text-base font-light duration-300 hover:text-addispink">
            {translate("Monday - Friday")}
          </li>
          <li className=" w-fit text-base font-light duration-300 hover:text-addispink">
            08:00 AM - 05:00 PM
          </li>
        </ul>
        <ul className="">
          <h4 className="text-lg font-semibold text-addispink">
            {translate("Related info")}
          </h4>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="">{translate("Terms and conditions")}</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="">{translate("Privacy policy")}</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="vacancy">{translate("Job Vacancy")}</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="">{translate("User Guide")}</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="faq">FAQs</Link>
          </li>
          <li className="w-fit text-base font-light duration-300 hover:text-addispink">
            <Link to="">{translate("Help")}</Link>
          </li>
        </ul>
        <ul className="">
          <h4 className="text-lg font-semibold text-addispink">
            {translate("contact")}
          </h4>
          <li className=" flex w-fit items-center text-base  font-light duration-300 hover:text-addispink">
            <div className="mr-2 grid h-4 w-4 ">
              <BsFillTelephoneFill />
            </div>
            <Link to="">(+251) 11 68 4243</Link>
          </li>
          <li className=" flex w-fit items-center text-base  font-light duration-300 hover:text-addispink">
            <div className="mr-2 grid h-4 w-4 text-lg ">
              <MdEmail />
            </div>
            <Link to="">info@addissystems.net</Link>
          </li>
          <li className=" flex w-fit items-center text-base  font-light duration-300 hover:text-addispink">
            <div className="mr-2 h-4 w-4"></div>
            <Link to="">support@addissystems.et</Link>
          </li>
          <div className="ml-6 mt-3">
            <Link to="demo-request">
              {" "}
              <Button
                text={translate("Demo request")}
                bg="bg-addispink"
                color="white"
                bgHover="hover:bg-white"
                textHover="addispink"
              />
            </Link>
          </div>
        </ul>
      </div>
      <hr className="mx-auto mt-8 w-4/5 border-addispink opacity-50" />
      <div className=" mt-6 text-center ">
        <p className=" opacity-70">
          Copyright &copy; {date.getFullYear()} All right reserved.
        </p>
        <p className="">
          <span className=" opacity-70">Powered by</span>{" "}
          <span className="cursor-pointer text-addispink opacity-100 duration-300 hover:opacity-95">
            AddisSystems plc.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
