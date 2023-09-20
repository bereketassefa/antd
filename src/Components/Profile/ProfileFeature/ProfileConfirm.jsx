import React, { useState } from "react";
import profile from "../../../assets/image/cute-girl-pic (12).jpg";

function ProfileConfirm({ setConfirmProfileModal }) {
  const [image, setImage] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(newImage);
    }
  };

  const handleImageDelete = () => {
    setImage(profile);
    setConfirmProfileModal(false);
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
          onClick={() => setConfirmProfileModal(false)}
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
