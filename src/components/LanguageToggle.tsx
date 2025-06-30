import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();
  return (
    <button
      className="text-sm px-3 py-1 rounded border bg-gray-200 dark:bg-gray-700"
      onClick={() => setLang(lang === "az" ? "en" : "az")}
    >
      {lang === "az" ? "EN" : "AZ"}
    </button>
  );
};

export default LanguageToggle;