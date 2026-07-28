"use client";

import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import ExperienceCard from "@/components/ExperienceCard";
import { useExperiences } from "@/hooks/useExperiences";

function ExperiencesContent() {
  const {
    experiences,
    search,
    category,
    destination,
    setSearch,
    setCategory,
    setDestination,
    resetFilters,
    destinations,
  } = useExperiences();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Explore Experiences</h1>

      <div className="flex flex-col gap-4 mb-8">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          category={category}
          destination={destination}
          destinations={destinations}
          onCategoryChange={setCategory}
          onDestinationChange={setDestination}
          onReset={resetFilters}
        />
      </div>

      {experiences.length === 0 ? (
        <p className="text-center text-slate-500 py-20">
          No results found. Try adjusting your search or filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={null}>
      <ExperiencesContent />
    </Suspense>
  );
}
