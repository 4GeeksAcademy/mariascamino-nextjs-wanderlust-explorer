"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { EXPERIENCES_DATA } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favorites = EXPERIENCES_DATA.filter((exp) => favoriteIds.includes(exp.id));

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-slate-500 py-20">
          You haven&apos;t saved any experiences yet. Explore and tap the heart icon
          to save favorites.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </div>
  );
}
