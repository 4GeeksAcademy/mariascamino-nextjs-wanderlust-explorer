"use client";

import { createContext, useState, ReactNode } from "react";

interface FavoritesContextValue {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
