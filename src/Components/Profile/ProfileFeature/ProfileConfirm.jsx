import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import { useParams } from "react-router-dom";

function ProfileConfirm({ profilePic, setConfirmProfileModal }) {
  const { id } = useParams();
  const [image, setImage] = useState(alternativeProfile);
  const [imageFile, setImageFile] = useState(null);
  const handleImageUpload = (event) => {
    const newImage = event.target.files[0];
    // console.log("Selected image:", newImage); // Log the selected image

    if (newImage) {
      setImageFile(newImage); // Save the File object
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(newImage);
      console.log(newImage);
    }
  };
  const handleImageDelete = () => {
    setImage(profilePic);
    setConfirmProfileModal(false);
  };

  const handleImageConfirm = async () => {
    try {
      if (!imageFile) {
        console.error("No image selected");
        return;
      }
      const formData = new FormData();
      formData.append("image", imageFile);
      // console.log(imageFile)
      const response = await axios.put(
        `https://account.qa.addissystems.et/profile/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log("Response:", response);
      if (response.status === 200) {
        console.log("Profile updated successfully");
        setConfirmProfileModal(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
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
        <label
          className="bg-gray-200 px-6 py-2 gap-1 rounded-lg flex items-center"
          onClick={handleImageConfirm}
        >
          Confirm
        </label>
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
