import React from "react";
import ButtonChevron from "../PublicComponents/ButtonChevron";
const BlogCaed2 = ({ image2, paragraph4 }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3">
      <div className="border-2 w-64 ">
        <div className="flex flex-col justify-center items-center">
          <img
            src={image2}
            alt=" News image"
            className="w-56 h-36 object-cover py-1"
          ></img>
          <p className="max-w-[200px]">{paragraph4}</p>
          <ButtonChevron text="Read More" />
        </div>
      </div>
    </div>
  );
};

export default BlogCaed2;
