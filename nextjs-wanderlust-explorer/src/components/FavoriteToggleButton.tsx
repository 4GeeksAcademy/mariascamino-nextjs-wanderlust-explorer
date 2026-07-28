"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function FavoriteToggleButton({ id }: { id: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      className={`w-full rounded-full px-6 py-3 font-semibold transition-colors ${
        favorited
          ? "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {favorited ? "♥ Saved to favorites" : "Add to favorites"}
    </button>
  );
}
