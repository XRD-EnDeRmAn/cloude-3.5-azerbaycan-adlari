import React, { useState } from "react";
import { useNames } from "../hooks/useNames";
import { useLanguage } from "../context/LanguageContext";
import { FaSortAlphaDown, FaSortAmountDown, FaEye } from "react-icons/fa";

const alphaArr = Array.from({ length: 32 }, (_, i) =>
  String.fromCharCode(i < 26 ? 65 + i : 199 + (i - 26))
); // A-Z və Ç, Ş və s. üçün əlavə et

const SortBar: React.FC = () => {
  const { setSort, setAlpha, sort, alpha } = useNames();
  const { lang } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <button
        className={`flex items-center gap-1 px-2 py-1 rounded border ${sort === "name" ? "bg-blue-200" : ""}`}
        onClick={() => setSort("name")}
        title={lang === "az" ? "Ada görə sırala" : "Sort by name"}
      >
        <FaSortAlphaDown />
        {lang === "az" ? "Ad" : "Name"}
      </button>
      <button
        className={`flex items-center gap-1 px-2 py-1 rounded border ${sort === "popularity" ? "bg-yellow-200" : ""}`}
        onClick={() => setSort("popularity")}
        title={lang === "az" ? "Populyarlığa görə sırala" : "Sort by popularity"}
      >
        <FaSortAmountDown />
        {lang === "az" ? "Populyarlıq" : "Popularity"}
      </button>
      <button
        className={`flex items-center gap-1 px-2 py-1 rounded border ${sort === "views" ? "bg-green-200" : ""}`}
        onClick={() => setSort("views")}
        title={lang === "az" ? "Baxışa görə sırala" : "Sort by views"}
      >
        <FaEye />
        {lang === "az" ? "Baxış" : "Views"}
      </button>
      <span className="mx-2">{lang === "az" ? "Hərf:" : "Letter:"}</span>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: 26 }).map((_, i) => {
          const letter = String.fromCharCode(65 + i);
          return (
            <button
              key={letter}
              className={`w-7 h-7 rounded ${alpha === letter ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-600"}`}
              onClick={() => setAlpha(letter)}
            >
              {letter}
            </button>
          );
        })}
        <button
          className={`w-7 h-7 rounded ${alpha === "" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-600"}`}
          onClick={() => setAlpha("")}
        >
          #
        </button>
      </div>
    </div>
  );
};
export default SortBar;