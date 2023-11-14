import React, { useState } from "react";
import ProfileFeature from "../../../../assets/image/coverpic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import CompanyPP from "../CompanyInfo/CompanyPP";
import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import ProfileBannerIMG from "./ProfileBannerIMG";
import ProfileBaneer from "./ProfileBaneer";
export default function FeatureImgHolder({ data }) {
  const [cookies] = useCookies(["user"]);
  const [isLoading] = useState(false);
  const [isPModalOpen, setisPModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
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
  // ...

  // ...
  // const handleUploadClick = async () => {
  //   const formData = new FormData();
  //   formData.append("profilePicture", selectedFile);
  //   formData.append("_id", cookies?.user?._id);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };
  //     const response = await axios.post(
  //       "https://account.qa.addissystems.et/profile/uploads",
  //       formData,
  //       config
  //     );
  //     if (response.status === 200) {
  //       setSelectedImage(response?.data?.profilePicture);
  //       message.success("Profile picture uploaded successfully");
  //       closeModal();
  //       setisSecondModalOpen(true); // Open the second modal after successful upload
  //     }
  //   } catch (error) {
  //     console.error("Error uploading profile picture:", error);
  //     message.error(error.response ? error.response.data : "An error occurred");
  //   }
  // };

  return (
    <div className="w-full flex justify-start ">
      <Modal
        visible={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <ProfileBaneer />
      </Modal>
      <div className="w-full flex justify-end  ">
        <img
          src={ProfileFeature}
          alt=""
          className="h-[100px] w-full md:h-[150px]  "
        />
        {data &&
          data.account &&
          data.account[0] &&
          data.account[0]._id === cookies.user._id && (
            <div className="absolute  ">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-white p-2 cursor-pointer"
                // onClick={handleEditClick}
              />
            </div>
          )}
      </div>
    </div>
  );
}
