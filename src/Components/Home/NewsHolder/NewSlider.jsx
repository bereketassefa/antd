import React, { useState } from "react";
import image from "../../../assets/image/iphone2.webp";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { MdReportGmailerrorred, MdOutlineSaveAlt } from "react-icons/md";

function NewSlider() {
  const [activeSession, setActiveSession] = useState(false);

  return (
    <div className="relative flex justify-between gap-16">
      <div className="relative">
        <div className=" mt-4 absolute z-50 right-0 flex justify-end">
          <div
            className="relative  flex justify-end transparent"
            onClick={() => setActiveSession(!activeSession)}
          >
            <CiMenuKebab className="  text-3xl mr-4 text-white" />
          </div>
          {activeSession && (
            <div className=" w-32 absolute top-0 right-[50px] z-50 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  {" "}
                  <MdReportGmailerrorred className="text-2xl" />
                  Report
                </li>
                <hr />
                <li className="px-4 py-2 hover:bg-gray-100  gap-1 flex items-center">
                  {" "}
                  <MdOutlineSaveAlt className="text-2xl" />
                  Save
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="w-full relative">
          <img
            src={image}
            alt="Photo 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
            <p className="felx justify-center  mx-20">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -right-[100px] -top-8  h-14   ">
        <AiOutlineClose className=" w-[50px] h-[50px] rounded-full text-white p- flex justify-end bg-zinc-700" />
      </div>
    </div>
  );
}

export default NewSlider;
