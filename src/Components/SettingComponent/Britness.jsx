import React, { useState, useEffect } from "react";
import day from "../../assets/image/light mode.png";
import night from "../../assets/image/dark mode.png";

const Britness = () => {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  
  return (
    <div className="flex flex-col items-center justify-center md:justify-center lg:flex-row lg:justify-start my-4 gap-10 p-8 ">
      <div
        className={`  border border-gray-300 ${
          theme === "light" ? "border-red-500" : ""
        } flex items-center flex-col justify-center p-1`}
        onClick={() => setTheme("light")}
      >
        <img src={day} alt="day" className="object-contain" />
        <label>
          <input
            type="radio"
            name="mode"
            value="light"
            checked={theme === "light" ? true : false}
          />
          Light Mode
        </label>
      </div>

      <div
        className={`border border-gray-300 ${
          theme === "dark" ? "border-red-500" : ""
        } flex items-center flex-col justify-center p-1`}
        onClick={() => setTheme("dark")}
      >
        <img src={night} alt="night" className="object-contain" />
        <label>
          <input
            type="radio"
            name="mode"
            value="dark"
            checked={theme === "dark" ? true : false}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Britness;
