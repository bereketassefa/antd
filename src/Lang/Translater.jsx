import React, { useState, useEffect, createContext, useContext } from "react";
import jsonLanguage from "./languages.json";

const TranslationContext = createContext();

const Translator = ({ children }) => {
  const [language, setLanguage] = useState("Eng");
  const [translationData, setTranslationData] = useState(jsonLanguage);

  useEffect(() => {
    const storedValue = localStorage.getItem("myLanguage");
    if (storedValue !== null) {
      setLanguage(JSON.parse(storedValue));
    }
  }, []);

  const translate = (key) => {
    return translationData[key][language];
  };

  const contextValue = {
    language,
    setLanguage,
    translate,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslation = () => {
  return useContext(TranslationContext);
};

export { Translator, useTranslation };
