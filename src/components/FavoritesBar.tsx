import React from "react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

const FavoritesBar: React.FC = () => {
  const { favorites, clearFavorites } = useFavorites();
  return (
    <div className="flex items-center gap-2">
      <FaHeart className="text-pink-500" />
      <span>{favorites.length}</span>
      <button className="ml-2 text-xs text-gray-500 underline" onClick={clearFavorites}>
        Clear all
      </button>
    </div>
  );
};
export default FavoritesBar;