import React, { useState } from "react";
import ProfileFeature from "../../../../assets/image/coverpic.png";

function ProfileBannerIMG({ onClose }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    // Perform actions when confirm button is clicked
    setIsConfirmed(true);
    // Close the modal
    onClose();
  };

  const handleDiscard = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-2 rounded-lg">
        <div className="flex justify-start mb-1">
          <p>Confirm Your over</p>
        </div>
        <img
          src={ProfileFeature}
          alt="Selected"
          className="mb-4 w-full h-48 object-cover"
        />
        <div className="flex justify-end gap-4">
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded flex justify-center items-center gap-2"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-gray-300 py-1 px-4 rounded flex justify-center items-center gap-2"
            onClick={handleDiscard}
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileBannerIMG;
