import React, { useState } from "react";
import namesData from "../../public/names.json";
import { useLanguage } from "../context/LanguageContext";
import { FaMagic } from "react-icons/fa";

const NameSuggestion: React.FC = () => {
  const { lang } = useLanguage();
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [suggested, setSuggested] = useState<any | null>(null);

  const generate = () => {
    let filtered = namesData;
    if (gender) filtered = filtered.filter((n) => n.gender === gender);
    if (origin) filtered = filtered.filter((n) => n.origin === origin);
    const rnd = filtered[Math.floor(Math.random() * filtered.length)];
    setSuggested(rnd || null);
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900 rounded p-4 shadow flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FaMagic />
        <span className="font-semibold">{lang === "az" ? "Ad təklifi" : "Name Suggestion"}</span>
      </div>
      <div className="flex gap-2">
        <select
          className="rounded border px-2"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">{lang === "az" ? "Cins" : "Gender"}</option>
          <option value="qız">{lang === "az" ? "Qız" : "Girl"}</option>
          <option value="oğlan">{lang === "az" ? "Oğlan" : "Boy"}</option>
        </select>
        <select
          className="rounded border px-2"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        >
          <option value="">{lang === "az" ? "Mənşə" : "Origin"}</option>
          <option value="azərbaycan">{lang === "az" ? "Azərbaycan" : "Azerbaijani"}</option>
          <option value="türk">{lang === "az" ? "Türk" : "Turkish"}</option>
          <option value="ərəb">{lang === "az" ? "Ərəb" : "Arabic"}</option>
          <option value="fars">{lang === "az" ? "Fars" : "Persian"}</option>
        </select>
        <button
          className="bg-blue-500 text-white px-2 rounded"
          onClick={generate}
        >
          {lang === "az" ? "Təklif et" : "Suggest"}
        </button>
      </div>
      {suggested && (
        <div className="mt-2 p-2 bg-white dark:bg-gray-900 rounded">
          <div className="font-bold">{lang === "az" ? suggested.name : suggested.name_en}</div>
          <div>{lang === "az" ? suggested.meaning : suggested.meaning_en}</div>
        </div>
      )}
    </div>
  );
};
export default NameSuggestion;