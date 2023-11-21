import React, { useState } from "react";
import profile from "../../../../assets/image/cute-girl-pic (12).jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { Modal, message } from "antd";
import ProfileConfirm from "../ProfileConfirm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { IoClose } from "react-icons/io5";


function CompanyPP({ profilePic, setMyModalOpen, clickedImage }) {
  const [image, setImage] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [cookies] = useCookies(["user"]);
  const [confirmprofilemodal, setConfirmProfileModal] = useState(false);
  const { id } = useParams();
  const token = cookies?.user.token;
const [confirmDelete, setConfirmDelete] = useState(false)



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
        `${url}/${token}`
      );

      if (response.status === 200) {
        setLoading(false);
        setConfirmProfileModal(false); // Close the modal
        // console.log('delete success')
        message.success("profile deleted successfully")
        setConfirmDelete(false)
      }
    } catch (error) {
      console.error("Error deleting profile picture:", error);
      message.error("error occured")
      setLoading(false);
    }
  };

  const closeWarningModal = () => {
    setConfirmProfileModal(false);
  };

  const handleUpload = () => {
    setConfirmProfileModal(true);
    // setMyModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={confirmprofilemodal}
        onOk={() => setConfirmProfileModal(false)}
        onCancel={() => setConfirmProfileModal(false)}
        footer={[]}
      >
        <ProfileConfirm
          // profilePic={profilePic}
          setConfirmProfileModal={setConfirmProfileModal}
          clickedImage={clickedImage}
          id={id}
          setMyModalOpen={setMyModalOpen}
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
          onClick={()=>setConfirmDelete(true)}
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <RiDeleteBin6Line className="text-[15px]" />
          )}
          {loading ? "Loading..." : "Delete"}
        </button>
      </div>
      {confirmDelete &&
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 top-[-180px] ">
         <div className="bg-white p-2 rounded-lg flex-col justify-center gap-4 ">
         <div className=" flex justify-end  mb-1">
                <IoClose
                  className="text-red-700 text-xl"
                  onClick={()=>setConfirmDelete(false)}
                />
              </div>
          {/* <img
              src={clickedImage}
            alt="Selected"
            className="mb-4 w-full h-48 object-cover"
          /> */}
          <p className="text-[26px] text-red-600 mx-8 my-10">Are you sure to delete your profile image ?</p>
          <div className="flex justify-end gap-4">
            <button
              className="bg-blue-500 text-white py-1 px-4 rounded flex justify-center items-center gap-2"
              onClick={handleImageDelete}
              // onClick={handleModalChangeClick}
    // onClick={()=> document.getElementById("profileInput").click()}
            >
              {/* <MdOutlineFileUpload className="text-2xl" /> */}
              Delete
            </button>
            <button
              className="bg-gray-300 py-1 px-4 rounded flex justify-center items-center gap-2"
              onClick={()=>setConfirmDelete(false)}
            >
              {/* <RiDeleteBinLine className="text-xl" /> */}
              cancle
            </button>
          </div>
        </div>
      </div>
        }
    </div>
  );
}

export default CompanyPP;
