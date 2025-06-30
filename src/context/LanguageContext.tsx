import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "az" | "en";
interface LanguageContextProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    // GeoIP detection
    fetch("/api/geoip")
      .then(res => res.json())
      .then(data => {
        if (data.country === "AZ") setLang("az");
      });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};