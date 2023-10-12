import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import flag from "../../assets/PuplicImage/1x/ethiopian_flag.svg";

import BannerPublic from "../../Components/PublicComponents/BannerPublic";

import Heading from "../../Components/PublicComponents/Heading";

import Button from "../../Components/PublicComponents/Button";

import Moto from "../../Components/PublicComponents/Moto";

import bannerImage from "../../assets/PuplicImage/contact-us.jpg";

import Sponsors from "../../Components/PublicComponents/Sponsors";

import { useTranslation } from "../../Lang/Translater";
const ContactPublic = () => {
  const { translate, language } = useTranslation();
  useEffect(() => {
    // aos.init({
    //   duration: 1000,
    //   // offset: 50,
    // });
  }, []);
  return (
    <main className=" relative">
      <BannerPublic
        bannerImage={bannerImage}
        header={translate("Contact us")}
        subtitle={translate("Solve All Your Digital Transaction Needs.")}
      />
      <Heading
        head={"Get in Contact"}
        headtwo={"with us"}
        para={translate("Contact-us para")}
      />
      <div className=" mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center gap-4 overflow-hidden px-1  ssm:px-4 sm:px-1 md:flex-row md:items-stretch ">
        <div
          data-aos="fade-right"
          className="contact-container w-full max-w-[500px] bg-slate-200 px-2 py-6 sm:px-8 "
        >
          <div className=" w-full max-w-md">
            <div className=" mb-6 ">
              <h3 className=" text-2xl font-semibold">
                {translate("Contact")}
              </h3>
              <p className="">{translate("Contact-para")}</p>
            </div>

            {/* Contact Section  */}
            <div className="flex flex-col gap-y-2">
              <div className=" group flex items-start ">
                <a className="flex" href="tel:+251116684243">
                  <div className=" mr-2 mt-1 text-xl text-addispink">
                    <BsFillTelephoneFill />
                  </div>
                  <h3 className=" text-xl font-semibold duration-300 hover:-translate-y-1 hover:text-addispink">
                    +251 11 66 84243
                  </h3>
                </a>
              </div>
              <div className=" group flex items-start ">
                <div className=" mr-2 mt-2 text-2xl text-addispink">
                  <MdEmail />
                </div>
                <div className="">
                  <a href="mailto:support@addissystems.et">
                    <h3 className=" text-xl font-semibold duration-300 hover:-translate-y-1 hover:text-addispink">
                      support@addissystems.et
                    </h3>
                  </a>
                  <a href="mailto:info@addissystems.et">
                    <h3 className=" text-xl font-semibold duration-300 hover:-translate-y-1 hover:text-addispink">
                      info@addissystems.et
                    </h3>
                  </a>
                </div>
              </div>
              <div className=" group flex items-start ">
                <div className=" mr-2 mt-1 text-2xl text-addispink">
                  <ImLocation2 />
                </div>
                <h3 className=" text-lg font-semibold duration-300 hover:-translate-y-1 hover:text-addispink">
                  Megenagna To 22 Road , Efrata Building Fourth Floor
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section  */}
        <div
          data-aos="fade-left"
          className="email-us-conatiner w-full max-w-[500px] bg-slate-200 px-2 py-6 sm:px-8 "
        >
          <h3 className=" mb-6 text-2xl font-semibold">Email us</h3>
          <form className=" flex flex-col gap-y-3">
            <input
              className=" rounded py-2 indent-2 outline-addisblue"
              type="text"
              name="firstName"
              placeholder="Name"
              required
            />
            <input
              className=" rounded py-2 indent-2 outline-addisblue"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="flex items-center rounded bg-white pl-2">
              <div className="h-5">
                <img
                  className="h-full w-7 rounded object-cover"
                  src={flag}
                  alt="ethiopian flag"
                />{" "}
              </div>
              <span className="ml-1 text-base">+251</span>
              <input
                className="rounde w-full py-3 indent-2 outline-none"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <textarea
              className="max-h-60 rounded py-2 indent-2 outline-addisblue"
              name="message"
              placeholder="your message..."
              rows={3}
              required
            />
            <div className=" mt-6 text-center">
              <Button text={"Submit"} bgHover={"hover:bg-addisblue"} />
            </div>
          </form>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <Heading head={"We are"} headtwo={"located at"} />
      </div>
      <div className=" bg-slate-100">
        <iframe
          title="google map"
          className=" border-primaryColor -mt-4 mb-12 h-[450px] w-full shadow-lg"
          src="https://www.google.com/maps/embed/v1/place?q=Efrata+Building+|+Bambis+|+ኤፍራታ+ህንጻ+|+ባምቢስ,+Equatorial+Guinea+Street,+Addis+Ababa,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <Moto />
      <Sponsors />
    </main>
  );
};

export default ContactPublic;
