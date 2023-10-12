import React, { useEffect, useState } from "react";
import BannerPublic from "../../Components/PublicComponents/BannerPublic";
import Heading from "../../Components/PublicComponents/Heading";
import vacancyImage from "../../assets/PuplicImage/vacancy-banner.jpg";
import ButtonChevron from "../../Components/PublicComponents/ButtonChevron";
import frontendImage from "../../assets/PuplicImage/frontend-image.jpg";
import notfound from "../../assets/PuplicImage/image_2023-08-22_14-36-10.png";

import {
  FaBusinessTime,
  FaCalendarTimes,
  FaCalendarCheck,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const Vacancy = () => {
  const [vacancyData, setVacancyData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await axios
          .get("https://intern.qa.addissystems.et/vacancy")
          .then((response) => {
            console.log(response.data);
            setVacancyData(response.data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="">
      <BannerPublic
        bannerImage={vacancyImage}
        header={"Job Vacancy"}
        subtitle={"If opportunity doesn't knock, build a door."}
      />{" "}
      <Heading
        head={"Our Lataest"}
        headtwo={"Job Listing"}
        para={
          "Fill in the details below and one of our team members will get back to you shortly."
        }
      />
      <div className=" mx-auto max-w-7xl px-2">
        {vacancyData?.length === 0 ? (
          <div className="container mx-auto mb-6 flex w-full max-w-3xl items-center justify-center bg-slate-300 p-6 ">
            <img
              src={notfound}
              className="w-full max-w-3xl rounded-sm"
              alt="not-found"
            />
          </div>
        ) : error?.message ? (
          <div>Something is Wrong... Please try again!</div>
        ) : (
          vacancyData.map((vacancy, index) => (
            <div className=" mx-auto mb-24 flex max-w-6xl flex-col gap-4 rounded bg-slate-200 px-4 pb-8 pt-4 md:flex-row lg:gap-10 lg:p-8">
              <div className=" borde h-60 border-addispink md:h-auto md:max-w-[240px] lg:max-w-xs">
                <img
                  src={frontendImage}
                  className="h-full w-full rounded-md object-cover"
                  alt="Frontend web development"
                />{" "}
              </div>
              <div className=" borde flex w-full flex-col justify-between border-addispink">
                <div className="">
                  <h2 className=" ca text-4xl font-semibold text-addispink">
                    {vacancy.position}
                  </h2>
                  <p className="indent mt-2 text-justify">
                    {vacancy.Description}
                  </p>
                </div>
                <hr className=" mt-4 border-addispink opacity-50 sm:hidden" />
                <div className="borde mt-4 flex flex-col items-center gap-4 border-addispink sm:flex-row sm:items-end sm:gap-0">
                  <div className="flex items-end gap-4 sm:mr-6 lg:mr-16 lg:gap-8">
                    <p className="flex flex-col items-center font-bold">
                      <FaBusinessTime className="-mb-1 text-[25px] text-green-600" />
                      Job Type
                      <span className=" text-sm font-medium">Intern</span>
                    </p>
                    <p className="flex flex-col items-center font-bold">
                      <FaCalendarCheck className="text-[20px] text-green-600" />
                      Posted Date
                      <span className=" text-sm font-medium">
                        {vacancy.PostDate}
                      </span>
                    </p>
                    <p className="flex flex-col items-center font-bold">
                      <FaCalendarTimes className="text-[20px] text-addispink" />
                      Dead Line
                      <span className=" text-sm font-medium text-addispink">
                        {vacancy.Deadline}
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <Link
                      to={`/vacancy-apply/${vacancy._id}/${vacancy.position}`}
                    >
                      <ButtonChevron
                        className=""
                        text={"Apply"}
                        width={150}
                        py={14}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Vacancy;
