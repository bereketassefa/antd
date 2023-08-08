import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";


function FontSize() {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
   console.log("myFontSize:", myFontSize);

  return (
    <div>
      <p
        style={{ fontSize: 16 + myFontSize }}
        className="flex justify-start pl-6 mb-3"
      >
        Font Size
      </p>

      <div className="my-12">
        <p style={{ fontSize: `${fontSize}px` }}>
          <p className="flex justify-center">Aa Bb Cc</p> {fontSize}
        </p>
        <div>
          <span
            onClick={() => increaseFontSize()}
            className="text-blue-500 cursor-pointer"
          >
            Increase Font Size
          </span>
          <span> | </span>
          <span
            onClick={() => decreaseFontSize()}
            className="text-blue-500 cursor-pointer"
          >
            Decrease Font Size
          </span>
        </div>
      </div>
    </div>
  );
}

export default FontSize;
