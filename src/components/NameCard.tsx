import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useFavorites } from "../context/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const NameCard: React.FC<{ name: any }> = ({ name }) => {
  const { lang } = useLanguage();
  const { favorites, toggleFavorite } = useFavorites();
  return (
    <motion.div
      className="bg-blue-50 dark:bg-blue-900 rounded-xl shadow-md p-4"
      whileHover={{ scale: 1.02 }}
      layout
      data-translate="name_card"
    >
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold" data-translate="name">
          {lang === "az" ? name.name : name.name_en}
        </span>
        <button onClick={() => toggleFavorite(name.id)} data-translate="favorite_button">
          {favorites.includes(name.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
      </div>
      <div className="mt-2 text-gray-700 dark:text-gray-200" data-translate="meaning">
        {lang === "az" ? name.meaning : name.meaning_en}
      </div>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <span className="bg-pink-200 dark:bg-pink-800 px-2 py-1 rounded" data-translate="gender">
          {lang === "az" ? (name.gender === "qız" ? "Qız" : "Oğlan") : (name.gender === "qız" ? "Girl" : "Boy")}
        </span>
        <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded" data-translate="origin">
          {name.origin}
        </span>
        <span className="bg-yellow-200 dark:bg-yellow-700 px-2 py-1 rounded" data-translate="similar">
          {lang === "az" ? "Oxşar" : "Similar"}: {name.similar.join(", ")}
        </span>
        <span className="bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded" data-translate="transliteration">
          {lang === "az" ? "Transliterasiya" : "Transliteration"}: {name.name_en}
        </span>
      </div>
    </motion.div>
  );
};

export default NameCard;