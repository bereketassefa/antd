import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import ModalBlogCard from "./ModalBlogCard";
import BlogCaed2 from "./BlogCaed2";
import { AddisPayNews2, AddisPayNews3 } from "../../PublicData/data";
import { Link } from "react-router-dom";

function BlogNews() {
  console.log("these is data", AddisPayNews3);
  return (
    <div className="   mx-10   ">
      <div className=" flex justify-between items-center">
        <Link to="blog" className=" flex justify-center items-center">
          <MdOutlineKeyboardArrowLeft className="text-2xl" /> Back
        </Link>

      </div>

      <div className=" ">
        {AddisPayNews2.map((news) => (
          <ModalBlogCard
            key={news.key}
            MainTopic={news.MainTopic}
            subtopic1={news.subtopic1}
            paragraph1={news.paragraph1}
            image1={news.image1}
            paragraph2={news.paragraph2}
            Subtopic2={news.Subtopic2}
            paragraph3={news.paragraph3}
            RelatedNews={news.RelatedNews}
          />
        ))}
      </div>
      <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-3">
        {AddisPayNews3.map((news) => (
          <BlogCaed2
            key={news.key}
            image2={news.image2}
            paragraph4={news.paragraph4}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogNews;
