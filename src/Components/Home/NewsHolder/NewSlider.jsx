


import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { MdReportGmailerrorred, MdOutlineSaveAlt } from "react-icons/md";

function NewSlider({ image, newContent }) {
  const [activeSession, setActiveSession] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleClose = () => {
    setActiveSession(false);
    // Add your close function here
  };
  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
  };
  return (
    <div className="max-w-[1000px] relative flex justify-between gap-16  ">
      <div className="relative">
        <div className="mt-4 absolute z-50 right-0 flex justify-end">
          <div
            className="relative flex justify-end transparent"
            onClick={() => {
              setActiveSession(!activeSession);
            }}
          >
            <CiMenuKebab className="text-3xl mr-4" />
          </div>

          {activeSession && (
            <div className="max-w-32 md:w-32 absolute top-0 right-[50px] z-50 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <MdReportGmailerrorred className="text-2xl" />
                  Report
                </li>
                <hr />
                <li className="px-4 py-2 hover:bg-gray-100 gap-1 flex items-center">
                  <MdOutlineSaveAlt className="text-2xl" />
                  Save
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="w-full relative">
          <img
             src={image[activeImageIndex]}
             alt={`Slider Image ${activeImageIndex + 1}`}
            className="md:w-[1000px] md:h-[600px] object-cover rounded-lg"
           
          />

          <div className="absolute bottom-0 justify-center  mx-40 md:mx-80 bg-black bg-opacity-50 text-white p-4">
            <div className="flex justify-center items-center">
              <p className="w-full">{newContent}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:-right-[100px] -top-8 h-14">
        <AiOutlineClose
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full text-white p-2 flex justify-end bg-zinc-700"
          onClick={handleClose}
        />
      </div>
    </div>
  );
}

export default NewSlider;
