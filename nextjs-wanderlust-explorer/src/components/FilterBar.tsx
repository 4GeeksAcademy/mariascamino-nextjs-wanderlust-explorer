"use client";

import { CategoryType } from "@/types";

const CATEGORIES: CategoryType[] = ["Adventure", "Culture", "Food", "Wellness", "Nature"];

interface FilterBarProps {
  category: CategoryType | "";
  destination: string;
  destinations: string[];
  onCategoryChange: (value: CategoryType | "") => void;
  onDestinationChange: (value: string) => void;
  onReset: () => void;
}

export default function FilterBar({
  category,
  destination,
  destinations,
  onCategoryChange,
  onDestinationChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onCategoryChange(category === cat ? "" : cat)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            category === cat
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400"
          }`}
        >
          {cat}
        </button>
      ))}

      <select
        value={destination}
        onChange={(e) => onDestinationChange(e.target.value)}
        className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
      >
        <option value="">All destinations</option>
        {destinations.map((dest) => (
          <option key={dest} value={dest}>
            {dest}
          </option>
        ))}
      </select>

      {(category || destination) && (
        <button
          type="button"
          onClick={onReset}
          className="shrink-0 text-sm font-medium text-blue-600 hover:text-blue-800 underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
