import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

interface Name {
  id: number;
  name: string;
  name_en: string;
  meaning: string;
  meaning_en: string;
  gender: string;
  origin: string;
  similar: string[];
}

export const NameCard: React.FC<{ name: Name }> = ({ name }) => {
  const { lang } = useLanguage();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 m-2 transition-colors"
      whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
      layout
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{lang === "az" ? name.name : name.name_en}</h2>
        <button onClick={() => toggleFavorite(name.id)}>
          {favorites.includes(name.id) ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
        </button>
      </div>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{lang === "az" ? name.meaning : name.meaning_en}</p>
      <div className="mt-2 flex flex-wrap gap-1 text-xs">
        <span className="px-2 py-1 bg-blue-200 dark:bg-blue-900 rounded">{lang === "az" ? (name.gender === "qız" ? "Qız" : "Oğlan") : (name.gender === "qız" ? "Girl" : "Boy")}</span>
        <span className="px-2 py-1 bg-green-200 dark:bg-green-900 rounded">{name.origin}</span>
        <span className="px-2 py-1 bg-yellow-200 dark:bg-yellow-700 rounded">{lang === "az" ? "Oxşar adlar" : "Similar"}: {name.similar.join(", ")}</span>
      </div>
    </motion.div>
  );
};