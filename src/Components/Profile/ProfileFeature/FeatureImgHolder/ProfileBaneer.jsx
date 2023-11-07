import React, { useState } from "react";
import { Modal } from "antd";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import image from "../../../../assets/image/iphone2.webp";
import ProfileBannerIMG from "../../ProfileFeature/FeatureImgHolder/ProfileBannerIMG";

function ProfileBaneer() {
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateImage = () => {
    // Perform the update image logic here

    // Open the modal after updating the image
    setIsImgModalOpen(true);
  };

  const handleDeleteImage = () => {
    // Perform the delete image logic here
  };

  return (
    <div>
      <Modal
        visible={isImgModalOpen}
        onOk={() => setIsImgModalOpen(false)} // Close the modal
        onCancel={() => setIsImgModalOpen(false)} // Close the modal
      >
        <ProfileBannerIMG />
      </Modal>

      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white p-2 rounded-lg">
          <img
            src={image}
            alt="Selected"
            className="mb-4 w-full h-48 object-cover"
          />
          <div className="flex justify-end gap-4">
            <button
              className="bg-blue-500 text-white py-1 px-4 rounded flex justify-center items-center gap-2"
              onClick={handleUpdateImage}
            >
              <MdOutlineFileUpload className="text-2xl" />
              Update
            </button>
            <button
              className="bg-gray-300 py-1 px-4 rounded flex justify-center items-center gap-2"
              onClick={handleDeleteImage}
            >
              <RiDeleteBinLine className="text-xl" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBaneer;
