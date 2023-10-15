import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};