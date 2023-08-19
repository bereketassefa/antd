
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import { Slider, Switch } from "antd";

function FontSize() {
  const { myFontSize, updateFontSize, inputValue, setInputValue } =
    useContext(ThemeContext);
  console.log("myFontSize:", myFontSize);

  const onChange = (newValue) => {
    setInputValue(newValue);
    updateFontSize(newValue);
  };

  const marks = {
    1: "1",
    25: "25",
    50: "50",
    75: "75",
    100: "100",
  };

  const sliderStyle = {
    trackStyle: { backgroundColor: "#D71A62" },
  };

  return (
    <div className="mb-8">
      <p style={{ fontSize: 16 + myFontSize }} className="mb-6">
        Font Size
      </p>
      <p
        style={{ fontSize: 16 + myFontSize }}
        className="flex justify-start pl-6 mb-3 "
      >
        <p className="flex justify-center items-center">Aa Bb Cc</p>{" "}
        {inputValue}
      </p>
      <>
        <Slider
          marks={marks}
          step={25}
          onChange={(newValue) => onChange(newValue)}
          value={typeof inputValue === "number" ? inputValue : 0}
          {...sliderStyle} // Apply the style here
        />
      </>
    </div>
  );
}

export default FontSize;




