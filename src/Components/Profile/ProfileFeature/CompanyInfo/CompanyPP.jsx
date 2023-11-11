import React, { useState } from "react";
import profile from "../../../../assets/image/cute-girl-pic (12).jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { Modal } from "antd";
import ProfileConfirm from "../ProfileConfirm";
import { useParams } from "react-router-dom";
import axios from "axios";

function CompanyPP({ profilePic, setMyModalOpen, clickedImage }) {
  const [image, setImage] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const [confirmprofilemodal, setConfirmProfileModal] = useState(false);
  const { id } = useParams();
  const handleImageUpload = (event) => {
    setLoadingUpdate(true);
    const newImage = event.target.files[0];
    if (newImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(newImage);
    }
  };

  const handleImageDelete = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_DELETE_PROFILE}`
      const response = await axios.delete(
        `${url}/${id}`
      );

      if (response.status === 200) {
        setLoading(false);
        setConfirmProfileModal(false); // Close the modal
        // console.log('delete success')
      }
    } catch (error) {
      console.error("Error deleting profile picture:", error);
      setLoading(false);
    }
  };

  const closeWarningModal = () => {
    setConfirmProfileModal(false);
  };

  const handleUpload = () => {
    setConfirmProfileModal(true);
    setMyModalOpen(false);
  };

  return (
    <div>
      <Modal
        visible={confirmprofilemodal}
        onOk={() => setConfirmProfileModal(false)}
        onCancel={() => setConfirmProfileModal(false)}
        footer={[]}
      >
        <ProfileConfirm
          profilePic={profilePic}
          setConfirmProfileModal={setConfirmProfileModal}
          clickedImage={clickedImage}
          id={id}
        />
      </Modal>
      <div className="flex justify-between ">
        <p>Updating profile</p>
      </div>
      <hr className="border-2 my-2" />
      <div className="flex flex-col justify-center items-center">
        <p>Help others recognize you!</p>
        <div>
          <img
            src={clickedImage}
            // alt="Clicked Image"
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
      </div>
      <hr className="border-2 my-2 " />
      <div className="flex justify-end gap-6">
        <button
          className="bg-gray-200 px-6 py-2 gap-1 rounded-lg flex items-center"
          onChange={handleImageUpload}
          onClick={handleUpload}
        >
          <MdOutlineFileUpload className="text-xl" />
          update
        </button>
        <button
          className="bg-gray-200 px-6 rounded-lg gap-1 flex items-center"
          onClick={handleImageDelete}
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <RiDeleteBin6Line className="text-[15px]" />
          )}
          {loading ? "Loading..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default CompanyPP;
