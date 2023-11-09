import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { message } from "antd";

function ProfileConfirm({ profilePic, setConfirmProfileModal, clickedImage }) {
  const { id } = useParams();
  const [image, setImage] = useState(clickedImage);
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const newImage = event.target.files[0];

    if (newImage) {
      setImageFile(newImage);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(newImage);
    }
  };

  const handleImageDelete = () => {
    setImage(profilePic);
    setConfirmProfileModal(false);
  };

  // const handleImageConfirm = async () => {
  //   try {
  //     if (!imageFile) {
  //       console.error("No image selected");
  //       return;
  //     }
  //     const formData = new FormData();
  //     formData.append("image", imageFile);

  //     const response = await axios.put(
  //       `https://account.qa.addissystems.et/profile/update/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (response.status === 200) {
  //       console.log("Profile updated successfully");
  //       setConfirmProfileModal(false);
  //     }
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //   }
  // };

  const handleImageConfirm = async () => {
    try {
      const url= `${import.meta.env.UPDATE_PROFILE_IMAGE}`
      if (!imageFile) {
        console.error("No image selected");
        return;
      }
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axios.put(
        `${url}/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
     
      if(response.status ===401){
        message.error('File size should not exceed 5 MB')
      }
      if(response.status === 402){
        message.error("File format is not allowed");
      }
      if (response.status === 200) {
        console.log("Profile updated successfully");
        setConfirmProfileModal(false);
      }
      

    } catch (error) {
      console.error("Error uploading profile picture:", error);
      message.error(
        error.response ? error.response.data.error : "An error occurred"
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <p>Confirm Image</p>
      </div>
      <hr className="border-2 my-2" />
      <div className="flex flex-col justify-center items-center">
        <p>Your new Profile Picture</p>
        <div>
          <img
            src={image}
            alt=""
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
      </div>
      <hr className="border-2 my-2 " />
      <div className="flex justify-center gap-6">
        <label className="bg-gray-200 px-6 py-2 gap-1 rounded-lg flex items-center">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          Upload
        </label>
        <button
          className="bg-gray-200 px-6 rounded-lg gap-1 flex items-center"
          onClick={handleImageConfirm}
        >
          Confirm
        </button>

        <button
          className="bg-gray-200 px-6 rounded-lg gap-1 flex items-center"
          onClick={handleImageDelete}
        >
          Discard
        </button>
      </div>
    </div>
  );
}

export default ProfileConfirm;
