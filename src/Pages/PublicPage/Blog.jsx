import React from "react";
 import Button from '../../Components/PublicComponents/Button'
import BannerPublic from "../../Components/PublicComponents/BannerPublic";
 
import blogbanner from "../../assets/PuplicImage/blog-banner.jpg";

import blogbanner2 from "../../assets/PuplicImage/RingTern-Blog-post.jpg";
 
import Moto from "../../Components/PublicComponents/Moto";

import { AddisPayNews } from "../../PublicData/data";

import Heading from "../../Components/PublicComponents/Heading";

import NewsFooter from "../../Components/PublicComponents/NewsFooter";

import slide1 from "../../assets/PuplicImage/ERP-image.png";

import slide2 from "../../assets/PuplicImage/pos service with bg-01.png";

import slide3 from "../../assets/PuplicImage/M-pos web.png";

import slide4 from "../../assets/PuplicImage/business inteligent.png";

import NewsCard from "../../Components/PublicComponents/NewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useTranslation } from "../Lang/Translater";
const Blog = () => {
  //  const { translate, language } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <main className="">
      <BannerPublic bannerImage={blogbanner} header={"Blog"} />

      <div>
        <Heading head="Our" headtwo="News" />
      </div>
      <div className=" mx-auto max-w-7xl ">
        <div className="md:mt- mb-12 mt-10 flex flex-col items-center justify-center gap-3 overflow-hidden md:flex-row md:justify-between">
          <div className="card-container flex  h-[600px]  w-[480px] flex-col justify-between bg-slate-100   pb-4   sm:px-7 md:w-1/2">
            <h3 className=" flex justify-center text-center text-2xl font-medium ">
              You will be satisfied
              <span className="text-addispink"> with our work!!!</span>
            </h3>

            <Slider {...settings}>
              <div>
                <img src={slide1} alt="Image 1" />
              </div>
              <div>
                <img src={slide2} alt="Image 2" />
              </div>
              <div>
                <img src={slide3} alt="Image 3" />
              </div>
              <div>
                <img src={slide4} alt="Image 4" />
              </div>
            </Slider>
          </div>

          <div
            className="relative h-[600px] w-[600px] border-2"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${blogbanner2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mt-16 flex items-center justify-center gap-2">
              <Button
                text="App Review"
                bgHover="hover:bg-addisblue"
                width={150}
                py={15}
              />
              <h2 className="text-xl text-white">27/12/2015</h2>
            </div>
            <div className="mt-24 flex flex-col">
              <h1 className="ml-10 text-2xl text-white">
                Bently Smart Chip Hits <br />
                <span className="text-addispink">One Million Users</span>
              </h1>
              <p className="ml-6 mt-4 w-[400px] text-xl text-white">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Heading head="Latest" headtwo="News" />
        </div>

        <div className=" my-16 grid grid-cols-2 gap-6  px-2 md:grid-cols-2 ">
          {AddisPayNews.map((news) => (
            <NewsCard
              key={news.key}
              Title={news.Title}
              news={news.news}
              image={news.image}
            />
          ))}
        </div>
      </div>
      <Moto />
      <NewsFooter />
    </main>
  );
};

export default Blog;
