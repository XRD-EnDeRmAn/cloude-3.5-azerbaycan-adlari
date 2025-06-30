import React, { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  clearFavorites: () => {},
});

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const clearFavorites = () => setFavorites([]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};