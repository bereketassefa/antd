import React, { useState } from "react";
import ProfileFeature from "../../../../assets/image/baner.png";
import logo from "../../../../assets/image/final logo-04.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
// import CompanyPP from "../CompanyInfo/CompanyPP";
import { Modal, message } from "antd";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import ProfileBannerIMG from "./ProfileBannerIMG";
import ProfileBaneer from "./ProfileBaneer";


export default function FeatureImgHolder({ data }) {
  const [cookies] = useCookies(["user"]);
  const [isLoading] = useState(false);
  const [isPModalOpen, setisPModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myModalOpen, setMyModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedBannerImage, setSelectedBannerImage] = useState(null);

  // const [ppImg, setPpImg] = useState(ProfileFeature)


  const handleUpdateImage = (e) => {
    
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // <-- Set the selected file here
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        openModal();
      };
      reader.readAsDataURL(file);
    }
    // Open the modal after updating the image
    // setMyModalOpen(true);
    setIsModalOpen(true)
  };

  const handleEditClick = () => {
  // const handleModalChangeClick = () => {
    document.getElementById("profileInput").click();
    openModal(false);
  };


  //   setIsModalOpen(true);
  // };

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

  const toggleModal = () => {
    console.log("cosed ...")
    setIsModalOpen(false);
    setMyModalOpen(false)
  };

  const handleConfirm = ()=>{
    // setSelectedImage(selectedImage) // should be from db
    setSelectedBannerImage(selectedImage)

    toggleModal()
  }
  
  const handleUploadClick = async () => {
    if (!selectedFile) {
      console.log("No file selected");
      message.error("No file selected");

      return;
    }

    // Check file size on client side before uploading
    if (selectedFile.size > 5 * 1024 * 1024) {
      console.log("File size should not exceed 5 MB");
      message.error("File size should not exceed 5 MB");

      return;
    }


      if (selectedImage) {
        handleConfirm()
        console.log("seted.....");
        console.log("Profile updated successfully");
        message.success("Profile updated successfully");
        toggleModal();
      }
  };
  const id = window.location.pathname.split("/")[3];
  
  const isUserIdEqual = cookies.user._id === id;
  console.log("user",id,isUserIdEqual,myModalOpen,selectedBannerImage);



  // console.log("...modal ipened", isModalOpen,selectedBannerImage)

  return (
    <div className="w-full flex justify-start ">
      {/* <Modal
        open={myModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        closable={false}
      >  */}
      {
        myModalOpen && <ProfileBaneer 
        clickedImage ={selectedBannerImage? selectedBannerImage: logo} 
        setSelectedBannerImage = {setSelectedBannerImage}
        setMyModalOpen = {setMyModalOpen}
        // setIsModalOpen ={ setIsModalOpen}
        />

     }  {/* </Modal> */}
      
      <div className="w-full flex justify-end  ">
        {/* main image  */}
        {/* <div className="h-[100px] w-full md:h-[150px] absolute border-4 border-yellow-900"></div> */}
        <img
          src={selectedBannerImage? selectedBannerImage : logo  }
          alt=""
          onClick={() => {
            if(!isUserIdEqual){
              return;
            }
            setMyModalOpen(true)} }
          className="h-[100px] w-full md:h-[150px] relative"
        />
        {data &&
          data.account &&
          data.account[0] &&
          data.account[0]._id === cookies.user._id && (
            <div className="absolute  ">
              {isUserIdEqual && <FontAwesomeIcon
                icon={faEdit}
                className="text-white p-2 cursor-pointer mt-3"
                onClick={handleEditClick}
              />}
            </div>
          )}
      </div>
      {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 ">
            <div className="bg-white p-2 rounded-lg">
              <div className=" flex justify-end  mb-1">
                <IoClose
                  className="text-red-700 text-xl"
                  onClick={toggleModal}
                />
              </div>
              <img
                src={selectedImage}
                alt="Selected"
                className="mb-4 w-full h-48 object-cover "
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleUploadClick}
                  className="bg-blue-500 text-white py-1 px-4 rounded"
                >
                  Confirm
                </button>
                <button
                  onClick={toggleModal}
                  className="bg-gray-300 py-1 px-4 rounded"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        )}
        
      <input
          type="file"
          id="profileInput"
          style={{ display: "none" }}
          accept=".jpg, .jpeg, .png"
          onChange={handleUpdateImage}
        />

    </div>
  );
}
