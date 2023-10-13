import React from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Moto from "../../Components/PublicComponents/Moto";

import Sponsors from "../../Components/PublicComponents/Sponsors";

import Feature from "../../Components/PublicComponents/Feature";

import LearnMore from "../../Components/PublicComponents/LearnMore";

import ButtonChevron from "../../Components/PublicComponents/ButtonChevron";

import { useTranslation } from "../../Lang/Translater";

const Service = ({
  heading,
  title,
  paragraph,
  featureData1,
  featureData2,
  bannerImage,
}) => {
  const { translate } = useTranslation();

  return (
    <main className="">
      {/* Banner with Heading and Button  */}
      <header className=" relative">
        <div
          className="  mx-auto flex h-60 max-w-7xl items-center justify-center px-4 text-center sm:h-72 sm:justify-start sm:text-left  "
          style={{
            backgroundImage: ` url('${bannerImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className=" absolute left-0 top-0 z-0 h-full w-full "
            style={{
              background: `linear-gradient(90deg, rgba(69, 66, 98, 1), rgba(69, 66, 98, 0.5))`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className=" z-10">
            <h1
              data-aos="fade-down"
              className=" mb-2 text-3xl font-semibold text-white sm:text-5xl"
            >
              {translate(heading)}
            </h1>
            <p data-aos="fade-down" className=" mb-4 text-slate-300">
              {translate(title)}
            </p>
            <div data-aos="fade-up">
              <Link to="/demo-request">
                <ButtonChevron text={translate("demo request")} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Body Title with Color  */}
      <div className="mx-auto my-12 max-w-7xl overflow-hidden px-4 text-center sm:px-8 md:px-20 lg:px-32 ">
        {heading !== "Electronic Invoice" && (
          <h1
            data-aos="fade"
            className=" text-2xl font-medium uppercase sm:text-3xl"
          >
            {translate("ADDIS")}{" "}
            <span className="text-addispink">
              {heading.includes("Service")
                ? heading.replace("Service", "")
                : translate(heading)}
            </span>{" "}
            {translate("POS-H1")}{" "}
            <span className="text-addispink">
              {translate("Benefit-POS-H1")}
            </span>
          </h1>
        )}

        {heading === "Electronic Invoice" && (
          <h1
            data-aos="fade"
            className=" text-2xl font-medium uppercase sm:text-3xl"
          >
            {translate("ELECTRONIC")}{" "}
            <span className="text-addispink">{translate("INVOICE")}</span>
          </h1>
        )}
        <div className=" mx-auto my-4 w-32 rounded-full border-b-4 border-addispink" />
        <section className=" mx-auto flex max-w-7xl flex-col items-center justify-between gap-x-4 md:flex-row lg:gap-x-10 ">
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            className="w-[90%] max-w-[550px] md:w-1/2 "
          >
            <img
              className=" h-full max-h-[450px] "
              src={bannerImage}
              alt="pos service illustration"
            />
          </div>
          <div data-aos="fade-left" className="w-[90%] max-w-[550px] md:w-1/2 ">
            <p className="text-justify indent-8 text-sm md:text-base ">
              {translate(paragraph)}
            </p>
          </div>
        </section>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-5 px-2 sm:grid-cols-2 sm:px-0  lg:grid-cols-3  ">
        <h2
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-delay="100"
          className=" col-span-full mb-2 mt-8 text-xl font-medium uppercase sm:text-2xl"
        >
          {translate(
            heading === "Mpos head" || heading === "Electronic Invoice"
              ? "Benefits of"
              : "Benefits to the business"
          )}{" "}
          <span className="text-addispink">
            {translate(
              heading === "Mpos head"
                ? "benefitM-POS"
                : heading === "Electronic Invoice"
                ? "E-INVOICE"
                : "community"
            )}
          </span>
        </h2>

        {/* Features Map under Benefit to the comunity */}
        {featureData1.map((data) => (
          <Feature key={data.title.Eng} feature={data} />
        ))}
        {featureData2 && (
          <h2
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="100"
            className=" col-span-full mb-2 mt-8 text-xl font-medium uppercase sm:text-2xl"
          >
            {translate(
              heading === "Mpos head"
                ? "Benefits of Supply Chain"
                : "Benefits to Tax for NI"
            )}{" "}
            <span className="text-addispink">
              {translate(
                heading === "Mpos head" ? "Management" : "Authorities"
              )}
            </span>
          </h2>
        )}

        {/* Features Map under Benefit to the Authority */}
        {featureData2 &&
          featureData2.map((data) => (
            <Feature key={data.title.Eng} feature={data} />
          ))}
      </div>
      <Moto />
      <LearnMore />
      <Sponsors />
    </main>
  );
};

export default Service;
