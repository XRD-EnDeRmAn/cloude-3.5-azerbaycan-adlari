import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useNames } from "../hooks/useNames";

export const NameSearch: React.FC = () => {
  const { lang } = useLanguage();
  const { names, setFilter } = useNames();
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        className="w-full rounded-md border px-3 py-2"
        placeholder={lang === "az" ? "Ad axtar..." : "Search names..."}
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setFilter(e.target.value);
        }}
      />
      {/* Add gender/origin filters here */}
    </div>
  );
};