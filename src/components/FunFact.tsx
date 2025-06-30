import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaLightbulb } from "react-icons/fa";

const factsAZ = [
  "Ən uzun Azərbaycan adı 12 hərfdən ibarətdir.",
  "Bir çox adlar təbiət hadisələri ilə bağlıdır.",
  "Aysu adı həm ayı, həm də suyu təmsil edir.",
  "Elvin adı dost deməkdir.",
];

const factsEN = [
  "The longest Azerbaijani name has 12 letters.",
  "Many names are related to natural phenomena.",
  "Aysu means both 'moon' and 'water'.",
  "Elvin means friend.",
];

const FunFact: React.FC = () => {
  const { lang } = useLanguage();
  const [fact, setFact] = useState(
    lang === "az"
      ? factsAZ[Math.floor(Math.random() * factsAZ.length)]
      : factsEN[Math.floor(Math.random() * factsEN.length)]
  );
  const refreshFact = () =>
    setFact(
      lang === "az"
        ? factsAZ[Math.floor(Math.random() * factsAZ.length)]
        : factsEN[Math.floor(Math.random() * factsEN.length)]
    );

  return (
    <div className="bg-yellow-50 dark:bg-yellow-900 rounded p-4 shadow flex flex-col gap-2 items-start">
      <div className="flex gap-2 items-center">
        <FaLightbulb className="text-yellow-500" />
        <span className="font-semibold">{lang === "az" ? "Maraqlı fakt" : "Fun Fact"}</span>
      </div>
      <div>{fact}</div>
      <button
        className="bg-yellow-500 text-white px-2 py-1 rounded"
        onClick={refreshFact}
      >
        {lang === "az" ? "Yenilə" : "Refresh"}
      </button>
    </div>
  );
};
export default FunFact;