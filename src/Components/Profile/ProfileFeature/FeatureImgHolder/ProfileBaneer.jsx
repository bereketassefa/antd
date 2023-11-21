import React, { useEffect, useState } from "react";
import { Modal, message } from "antd";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import ProfileFeature from "../../../../assets/image/coverpic.png";
import ProfileBannerIMG from "../../ProfileFeature/FeatureImgHolder/ProfileBannerIMG";
import FeatureImgHolder from "./featureImgHolder";
import { IoClose } from "react-icons/io5";


function ProfileBaneer({clickedImage, setSelectedBannerImage, setMyModalOpen}) {
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [chosenImage, setChosenImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(ProfileFeature);
  const [selectedFile, setSelectedFile] = useState(null);
const [confirmDelete, setConfirmDelete] = useState(false)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false)
    setMyModalOpen(false)
    
  };

  const handleUpdateImage = () => {
    
    if(clickedImage){
      setIsModalOpen(tue)
    }

    const newImage = event.target.files[0];
    if (newImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(newImage);
    }
    // Open the modal after updating the image
    // setIsImgModalOpen(true);
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    // Check file size on client side before uploading
    if (selectedFile.size > 5 * 1024 * 1024) {
      console.log("File size should not exceed 5 MB");
      return;
    }

//     const formData = new FormData();
//     formData.append("profilePicture", selectedFile);
//     formData.append("token", cookies?.user?.token);
// // console.log(cookies?.user?.token)
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       };
//       const url = `${import.meta.env.VITE_ACCOUNT_UPLOAD_PROFILE}`;
//       const response = await axios.post(url, formData, config);

      if (selectedImage) {
        setSelectedImage(selectedImage);
        console.log("seted.....");
        console.log("Profile updated successfully");
        closeModal();
      }
      // if(response.status ===400){
      //   message.error('File size should not exceed 5 MB')
      // }
      // if(response.status === 401){
      //   message.error("File format is not allowed");
      // }
      // else {
      //   // Handle other status codes here if needed
      //   message.error("An unexpected error occurred");
      // }
    // } catch (error) {
    //   console.error("Error uploading profile picture:", error);
    //   message.error(
    //     error.response ? error.response.data.error : "An error occurred"
    //   );
    // }
  };

  const handleModalChangeClick = () => {
    console.log("cliked");
    setIsModalOpen(true);
    // closeModal()
    // console.log("cliked2");
    // document.getElementById("profileInput").click();
    // console.log("cliked3");
  };

  const handleDeleteImage = () => {
    
    // Perform the delete image logic here
    // setConfirmDelete(true)
    setSelectedBannerImage(null)
    // setIsImgModalOpen(false)
    // setIsModalOpen(false)
    setMyModalOpen(false)
    setIsModalOpen(false)
    message.success("banner deleted successfully")
  };

  return (
    <div>
      {/* <Modal
        open={isImgModalOpen}
        onOk={() => setIsImgModalOpen(false)} // Close the modal
        onCancel={() => setIsImgModalOpen(false)} // Close the modal
        closable={false}
        >
        <ProfileBannerIMG  />
        </Modal> */}

        {isModalOpen &&
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
         <div className="bg-white p-2 rounded-lg">
         <div className=" flex justify-end  mb-1">
                <IoClose
                  className="text-red-700 text-xl"
                  onClick={closeModal}
                />
              </div>
          <img
              src={clickedImage}
            alt="Selected"
            className="mb-4 w-full h-48 object-cover"
          />
          <div className="flex justify-end gap-4">
            <button
              className="bg-blue-500 text-white py-1 px-4 rounded flex justify-center items-center gap-2"
              onChange={handleUpdateImage}
              // onClick={handleModalChangeClick}
    onClick={()=> document.getElementById("profileInput").click()}
            >
              {/* <MdOutlineFileUpload className="text-2xl" /> */}
              Update
            </button>
            <button
              className="bg-gray-300 py-1 px-4 rounded flex justify-center items-center gap-2"
              onClick={()=>setConfirmDelete(true)}
            >
              <RiDeleteBinLine className="text-xl" />
              Delete
            </button>
          </div>
        </div>
      </div>
        }
      
        {confirmDelete &&
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4  ">
         <div className="bg-white p-2 rounded-lg flex-col justify-center gap-4 ">
         <div className=" flex justify-end  mb-1">
                <IoClose
                  className="text-red-700 text-xl"
                  onClick={closeModal}
                />
              </div>
          {/* <img
              src={clickedImage}
            alt="Selected"
            className="mb-4 w-full h-48 object-cover"
          /> */}
          <p className="text-[26px] text-red-600 mx-8 my-10">Are you sure to delete your banner image ?</p>
          <div className="flex justify-end gap-4">
            <button
              className="bg-blue-500 text-white py-1 px-4 rounded flex justify-center items-center gap-2"
              onClick={handleDeleteImage}
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

export default ProfileBaneer;
