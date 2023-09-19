// import React, { useState } from "react";
// import profile from "../../../../assets/image/cute-girl-pic (12).jpg";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { MdOutlineFileUpload } from "react-icons/md";
// function CompanyPP({ profilePic }) {
//   const [image, setImage] = useState(profile);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleImageUpload = (event) => {
//     const newImage = event.target.files[0];
//     if (newImage) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(newImage);
//     }
//   };

//   const handleImageDelete = () => {
//     setImage(profile);
//   };

//   return (
//     <div>
//       <div className="flex justify-between">
//         <p>Updating profile</p>
//       </div>
//       <hr className="border-2 my-2" />
//       <div className="flex flex-col justify-center items-center">
//         <p>Help others recognize you!</p>
//         <div>
//           <img src={profilePic} alt="" className="w-40 h-40 rounded-full" />
//         </div>
//       </div>
//       <hr className="border-2 my-2 " />
//       <div className="flex justify-end gap-6">
//         <label className="bg-gray-200 px-6 py-2 gap-1 rounded-lg flex items-center">
//           <input
//             type="file"
//             accept="image/*"
//             style={{ display: "none" }}
//             onChange={handleImageUpload}
//           />
//           <MdOutlineFileUpload className="text-xl" />
//           Update
//         </label>
//         <button
//           className="bg-gray-200 px-6 rounded-lg gap-1 flex items-center"
//           onClick={handleImageDelete}
//         >
//           <RiDeleteBin6Line className="text-[15px]" />
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CompanyPP;


import React, { useState } from "react";
import profile from "../../../../assets/image/cute-girl-pic (12).jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";

function CompanyPP({ profilePic }) {
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
  };

  return (
    <div>
      <div className="flex justify-between">
        <p>Updating profile</p>
      </div>
      <hr className="border-2 my-2" />
      <div className="flex flex-col justify-center items-center">
        <p>Help others recognize you!</p>
        <div>
          <img src={profilePic} alt="" className="w-40 h-40 object-cover rounded-full" />
        </div>
      </div>
      <hr className="border-2 my-2 " />
      <div className="flex justify-end gap-6">
        <label className="bg-gray-200 px-6 py-2 gap-1 rounded-lg flex items-center">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <MdOutlineFileUpload className="text-xl" />
          Update
        </label>
        <button
          className="bg-gray-200 px-6 rounded-lg gap-1 flex items-center"
          onClick={handleImageDelete}
        >
          <RiDeleteBin6Line className="text-[15px]" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default CompanyPP;
