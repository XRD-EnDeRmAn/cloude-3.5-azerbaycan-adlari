import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaBirthdayCake } from "react-icons/fa";

const dummyCelebs = [
  { name: "Nigar Camal", desc_az: "Müğənni", desc_en: "Singer" },
  { name: "Teymur Rəcəbov", desc_az: "Şahmatçı", desc_en: "Chess Grandmaster" },
  { name: "Aygün Kazımova", desc_az: "Pop ulduz", desc_en: "Pop Star" },
];

const CelebrityBirthdays: React.FC = () => {
  const { lang } = useLanguage();
  // Dummy data, real world: filter by today's date
  return (
    <div className="bg-pink-50 dark:bg-pink-900 rounded p-4 shadow">
      <div className="flex gap-2 items-center">
        <FaBirthdayCake className="text-pink-500" />
        <span className="font-semibold">{lang === "az" ? "Məşhurların doğum günləri" : "Celebrity Birthdays"}</span>
      </div>
      <ul className="mt-2">
        {dummyCelebs.map((celeb, i) => (
          <li key={i} className="mb-1">
            <span className="font-bold">{celeb.name}</span> -{" "}
            {lang === "az" ? celeb.desc_az : celeb.desc_en}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CelebrityBirthdays;