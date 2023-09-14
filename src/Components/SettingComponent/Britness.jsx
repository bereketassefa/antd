import React, { useEffect, useState } from "react";
import day from "../../assets/image/light mode.png";
import night from "../../assets/image/dark mode.png";

const Britness = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);  
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Reading from localStorage when component mounts
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Setting class and saving theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = (newTheme) => {
    setTheme(newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  

  return (
    <div className="flex flex-col items-center justify-center md:justify-center lg:flex-row lg:justify-start my-4 gap-10 p-8">
      <div
        className={`border border-gray-300 ${!isDarkMode ? "border-red-500" : ""} flex items-center flex-col justify-center p-1`}
        
      >
        <img  onClick={() => handleThemeSwitch("light")} src={day} alt="day" className=" object-contain" />
        <label>
          <input
            type="radio"
            name="mode"
            value="light"
            checked={!isDarkMode}
          />
          Light Mode
        </label>
      </div>

      <div
        className={`border border-gray-300 ${isDarkMode ? "border-red-500" : ""} flex items-center flex-col justify-center p-1`}
        onClick={() => handleThemeSwitch("dark")}
      >
        <img src={night} alt="night" className="object-contain" />
        <label>
          <input
            type="radio"
            name="mode"
            value="dark"
            checked={isDarkMode}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Britness;
