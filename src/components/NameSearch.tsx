import React, { useState } from "react";
import { useNames } from "../hooks/useNames";
import { useLanguage } from "../context/LanguageContext";
import NameCard from "./NameCard";

const genderOptions = [
  { value: "", label_az: "Hamısı", label_en: "All" },
  { value: "qız", label_az: "Qız", label_en: "Girl" },
  { value: "oğlan", label_az: "Oğlan", label_en: "Boy" },
];

const originOptions = [
  { value: "", label_az: "Hamısı", label_en: "All" },
  { value: "azərbaycan", label_az: "Azərbaycan", label_en: "Azerbaijani" },
  { value: "türk", label_az: "Türk", label_en: "Turkish" },
  { value: "ərəb", label_az: "Ərəb", label_en: "Arabic" },
  { value: "fars", label_az: "Fars", label_en: "Persian" }
];

const NameSearch: React.FC = () => {
  const { lang } = useLanguage();
  const { filteredNames, setSearch, setGender, setOrigin, resetFilters } = useNames();
  const [input, setInput] = useState("");

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow mb-6">
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          className="px-3 py-2 rounded border w-1/2"
          placeholder={lang === "az" ? "Ad axtar..." : "Search names..."}
          value={input}
          onChange={e => {
            setInput(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <select className="rounded border px-2 py-1" onChange={e=>setGender(e.target.value)}>
          {genderOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {lang === "az" ? opt.label_az : opt.label_en}
            </option>
          ))}
        </select>
        <select className="rounded border px-2 py-1" onChange={e=>setOrigin(e.target.value)}>
          {originOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {lang === "az" ? opt.label_az : opt.label_en}
            </option>
          ))}
        </select>
        <button
          className="ml-auto px-4 py-1 bg-red-200 dark:bg-red-800 rounded"
          onClick={() => { setInput(""); resetFilters(); }}
        >
          {lang === "az" ? "Sıfırla" : "Clear"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredNames.map(name => (
          <NameCard key={name.id} name={name} />
        ))}
      </div>
      {filteredNames.length === 0 && (
        <div className="text-center text-gray-500 mt-8">{lang === "az" ? "Ad tapılmadı" : "No names found"}</div>
      )}
    </div>
  );
};

export default NameSearch;