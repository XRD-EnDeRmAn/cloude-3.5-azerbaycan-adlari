import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "az" | "en";
const defaultLang: Lang = "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} >({
  lang: defaultLang,
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data.country_code === "AZ") setLang("az");
      });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};