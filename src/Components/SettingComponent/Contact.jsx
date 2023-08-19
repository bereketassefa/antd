import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
function Contact() {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
    console.log("myFontSize:", myFontSize);
  return (
    <div className="max-w-[509px] mx-auto h-[452px] bg-[#F9F7F7] mt-5 p-8">
      <h1
        style={{ fontSize: 16 + myFontSize }}
        className="text-black font-bold text-[18px]"
      >
        Contact
      </h1>
      <p
        style={{ fontSize: 16 + myFontSize }}
        className="text-[15px] font-semibold text-black"
      >
        Support Team
      </p>
      <a
        href=""
        style={{ fontSize: 16 + myFontSize }}
        className="text-[15px] font-semibold text-[#3222C6]"
      >
        info@addissystem.com
      </a>
    </div>
  );
}

export default Contact;
