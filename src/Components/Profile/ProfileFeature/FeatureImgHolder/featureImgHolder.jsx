import React, { useState } from "react";
import ProfileFeature from "../../../../assets/image/coverpic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import CompanyPP from "../CompanyInfo/CompanyPP";
import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import axios from "axios";
export default function FeatureImgHolder({ data }) {
  const [cookies] = useCookies(["user"]);
  const [isLoading] = useState(false);
  const [isPModalOpen, setisPModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setisSecondModalOpen] = useState(false);
  const [isModalClose, setIsModalClose] = useState(false);
  const toggleModal = () => {
    setIsModalClose(false);
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      message.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("profilePicture", selectedFile);
    formData.append("_id", cookies?.user?._id);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        "https://account.qa.addissystems.et/profile/uploads",
        formData,
        config
      );
      if (response.status === 200) {
        setSelectedImage(response?.data?.profilePicture);
        // console.log(response.data.profilePicture);
        message.success("Profile picture uploaded successfully");
        closeModal();
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      message.error(error.response ? error.response.data : "An error occurred");
    }
  };

  const handleModalChangeClick = () => {
    openModal(false);
    document.getElementById("profileImageInput").click();
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-start">
        <div className="w-full flex justify-end ">
          {/* Skeleton for Feature Image */}
          <div className="h-[100px] md:h-[150px] w-full bg-gray-300 animate-pulse"></div>

          {/* Skeleton for Edit Icon */}
          <div className="absolute w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-start ">
      <Modal
        visible={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <CompanyPP />
      </Modal>

      <div className="w-full flex justify-end   ">
        <img
          src={ProfileFeature}
          alt=""
          className="h-[100px] w-full md:h-[150px]  "
          onClick={() => setIsModalOpen(true)}
        />

        {isSecondModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-2 rounded-lg">
              <div className="flex justify-end mb-1">
                <IoClose
                  className="text-red-700 text-xl"
                  onClick={() => setisSecondModalOpen(false)} // Added close function here
                />
              </div>
              <img
                // src={ProfileFeature}
                alt="Selected"
                className="mb-4 w-full h-48 object-cover"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleUploadClick}
                  className="bg-blue-500 text-white py-1 px-4 rounded"
                >
                  Upload
                </button>
                <button
                  onClick={handleModalChangeClick}
                  className="bg-gray-300 py-1 px-4 rounded"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        )}

        {data &&
          data.account &&
          data.account[0] &&
          data.account[0]._id === cookies.user._id && (
            <div className="absolute ">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-white p-2 cursor-pointer"
                onClick={() => setisSecondModalOpen(true)}
              />
            </div>
          )}
      </div>
    </div>
  );
}
