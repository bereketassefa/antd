import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [myFontSize, setMyFontSize] = useState(2);
  const [inputValue, setInputValue] = useState(1);

  const updateFontSize = (num) => {
    setMyFontSize(num / 10);
  };

  return (
    <ThemeContext.Provider
      value={{ myFontSize, updateFontSize, inputValue, setInputValue }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
