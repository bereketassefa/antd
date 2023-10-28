import React, { useState } from "react";
import { Modal } from "antd";
import ButtonChevron from "../../Components/PublicComponents/ButtonChevron";
import BlogModal from "./BlogNews";
import { Link } from "react-router-dom";

const NewsCard = ({ Title, news, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-100 md:grid-rows-2 md:flex-row">
      {/* <Modal
        centered
        visible={isModalOpen}
        width={900}
        footer={null}
        onCancel={handleCloseModal}
      >
        <BlogModal />
      </Modal> */}
      <div className="  flex flex-col  sm:flex-row gap-2 border-2 pt-4">
        <div>
          <img
            src={image}
            alt=""
            className="h-[300px] w-[300px] object-cover"
          />
        </div>
        <div className="h-[300px] max-w-[300px]">
          <h1 className="flex justify-center py-4 text-xl font-bold">
            {Title}
          </h1>
          <p className="flex items-center justify-center text-sm">{news}</p>
          <Link
            to="blognews"
            // onClick={handleOpenModal}
            className="mt-4 flex justify-end pr-2"
          >
            <ButtonChevron text="Read More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
