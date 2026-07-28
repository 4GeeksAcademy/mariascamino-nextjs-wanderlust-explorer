"use client";

import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(experience.id);

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={experience.imageUrl} alt={experience.title} fill className="object-cover" />
        <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-2.5 py-1 rounded-full text-slate-700 shadow-sm">
          {experience.category}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(experience.id);
          }}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-sm"
        >
          <HeartIcon filled={favorited} />
        </button>
      </div>
      <Link href={`/experiences/${experience.id}`} className="flex flex-col gap-1 p-4">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          {experience.destination}
        </span>
        <h3 className="font-bold text-slate-900 leading-snug line-clamp-2">{experience.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="flex items-center gap-1 text-sm text-slate-700">
            <StarIcon /> {experience.rating.toFixed(1)}
          </span>
          <span className="text-sm text-slate-500">
            From <span className="font-bold text-slate-900">${experience.price}</span> / person
          </span>
        </div>
      </Link>
    </div>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${filled ? "fill-rose-500 stroke-rose-500" : "fill-none stroke-slate-600"}`}
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6.5-4.35-9.3-8.28C1.02 10.4 1.5 6.9 4.36 5.3c2.2-1.23 4.85-.6 6.15 1.28.4.57 1.04.57 1.44 0 1.3-1.88 3.95-2.51 6.15-1.28 2.86 1.6 3.34 5.1 1.66 7.42C18.5 16.65 12 21 12 21z"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-amber-400">
      <path d="M12 2l2.9 6.26 6.9.6-5.2 4.5 1.6 6.74L12 16.9l-6.2 3.2 1.6-6.74-5.2-4.5 6.9-.6L12 2z" />
    </svg>
  );
}
