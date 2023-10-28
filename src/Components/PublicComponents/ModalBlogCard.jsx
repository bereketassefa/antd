import React from "react";
import ButtonChevron from "../PublicComponents/ButtonChevron";

const ModalBlogCard = ({
  MainTopic,
  subtopic1,
  paragraph1,
  image1,
  paragraph2,
  Subtopic2,
  paragraph3,
  RelatedNews,
}) => {
  return (
    <div>
      <div>
        <div className="   sm:flex-row  items-center ">
          <h1 className="text-xl  font-bold my-3">{MainTopic}</h1>
          <h3 className="text-[15px]  font-bold my-3">{subtopic1}</h3>
          <div className="flex gap-4 flex-col sm:flex-row ">
           
            <p className="justify max-w-[900px] mx-6">{paragraph1}</p>
            <img
              src={image1}
              alt=" News image"
              className=" max-w-[500px] h-48 object-cover"
            ></img>
          </div>
        </div>
        <p className=" mx-6">{paragraph2}</p>
        <div>
          <h2 className="text-xl  font-bold my-3">{Subtopic2}</h2>
          <p className="mx-6">{paragraph3}</p>
        </div>
      </div>
      <p className="text-xl  font-bold my-3">{RelatedNews}</p>
    </div>
  );
};

export default ModalBlogCard;
