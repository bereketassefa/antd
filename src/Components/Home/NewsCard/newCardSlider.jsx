import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function NewSliderNewsCard({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const nextSlide = () => {
      const newIndex = activeIndex >= images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
    };
  
    const prevSlide = () => {
      const newIndex = activeIndex <= 0 ? images.length - 1 : activeIndex - 1;
      setActiveIndex(newIndex);
    };
  
    console.log("Active Index: ", activeIndex);
    
    return (
      <div className="relative">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-[400px] object-cover transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))} <img src="http://localhost:8020/uploads/1696331347717-buna.png" alt="Test" className="absolute w-full h-[400px] object-cover"/>
        <button
          className="absolute top-1/2 left-0 p-4 bg-white bg-opacity-50"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 p-4 bg-white bg-opacity-50"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    );
  }
  
export default NewSliderNewsCard;
