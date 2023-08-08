
import React, { useState, useEffect } from "react";
import day from "../../assets/image/light mode.png";
import night from "../../assets/image/dark mode.png";

const Britness = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div
      className={`bg-${mode === "dark" ? "dark" : "light"} text-${
        mode === "dark" ? "dark" : "light"
      }`}
    >
      <div className="grid-6 items-center justify-center md:justify-center md:flex lg:flex-row lg:justify-start my-4 gap-10 p-8">
        <div>
          <label>
            <img src={day} alt="day" className="object-contain" />
            <input
              type="radio"
              name="mode"
              value="light"
              checked={mode === "light"}
              onChange={handleModeChange}
            />
          </label>
          Light Mode
        </div>
        <div className="items-center flex-col justify-center">
          <img src={night} alt="night" className="object-contain" />
          <label>
            <input
              type="radio"
              name="mode"
              value="dark"
              checked={mode === "dark"}
              onChange={handleModeChange}
            />
            Dark mode
          </label>
        </div>
      </div>
    </div>
  );
};

export default Britness;

