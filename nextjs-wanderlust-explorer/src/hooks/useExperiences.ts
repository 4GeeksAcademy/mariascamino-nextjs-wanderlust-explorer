"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { EXPERIENCES_DATA } from "@/data/experiences";
import { CategoryType, Experience } from "@/types";

interface UseExperiencesResult {
  experiences: Experience[];
  search: string;
  category: CategoryType | "";
  destination: string;
  setSearch: (value: string) => void;
  setCategory: (value: CategoryType | "") => void;
  setDestination: (value: string) => void;
  resetFilters: () => void;
  destinations: string[];
}

export function useExperiences(): UseExperiencesResult {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read initial state from URL query params on first render.
  const [search, setSearchState] = useState(searchParams.get("q") ?? "");
  const [category, setCategoryState] = useState<CategoryType | "">(
    (searchParams.get("category") as CategoryType) ?? ""
  );
  const [destination, setDestinationState] = useState(
    searchParams.get("destination") ?? ""
  );

  // Keep the URL in sync with the active filters (url-driven state).
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (category) params.set("category", category);
    if (destination) params.set("destination", destination);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [search, category, destination, pathname, router]);

  const setSearch = useCallback((value: string) => setSearchState(value), []);
  const setCategory = useCallback(
    (value: CategoryType | "") => setCategoryState(value),
    []
  );
  const setDestination = useCallback(
    (value: string) => setDestinationState(value),
    []
  );
  const resetFilters = useCallback(() => {
    setSearchState("");
    setCategoryState("");
    setDestinationState("");
  }, []);

  const destinations = useMemo(
    () => Array.from(new Set(EXPERIENCES_DATA.map((exp) => exp.destination))).sort(),
    []
  );

  const experiences = useMemo(() => {
    return EXPERIENCES_DATA.filter((exp) => {
      let matchesSearch = true;
      if (search) {
        try {
          matchesSearch = new RegExp(search, "i").test(exp.title);
        } catch {
          matchesSearch = exp.title.toLowerCase().includes(search.toLowerCase());
        }
      }
      const matchesCategory = category ? exp.category === category : true;
      const matchesDestination = destination ? exp.destination === destination : true;
      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [search, category, destination]);

  return {
    experiences,
    search,
    category,
    destination,
    setSearch,
    setCategory,
    setDestination,
    resetFilters,
    destinations,
  };
}
