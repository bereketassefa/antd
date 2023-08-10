import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [myFontSize, setMyFontSize] = useState(2);
  // const [darkMode, setDarkMode] = useState(false)

  const increaseFontSize = () => {
    setMyFontSize(myFontSize + 5);
  };

  const decreaseFontSize = () => {
    setMyFontSize(myFontSize - 5);
  };

  const updateFontSize = (num) => {
    setMyFontSize(num / 10);
  };

  return (
    <ThemeContext.Provider
      value={{ myFontSize, increaseFontSize, decreaseFontSize, updateFontSize }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
