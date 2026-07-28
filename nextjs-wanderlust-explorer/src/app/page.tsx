"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { EXPERIENCES_DATA } from "@/data/experiences";

function getFeaturedDestinations() {
  const seen = new Set<string>();
  const featured: { destination: string; imageUrl: string }[] = [];
  for (const exp of EXPERIENCES_DATA) {
    if (!seen.has(exp.destination)) {
      seen.add(exp.destination);
      featured.push({ destination: exp.destination, imageUrl: exp.imageUrl });
    }
    if (featured.length >= 6) break;
  }
  return featured;
}

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const destinations = getFeaturedDestinations();

  const handleSearch = () => {
    const query = search ? `?q=${encodeURIComponent(search)}` : "";
    router.push(`/experiences${query}`);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center bg-gradient-to-b from-sky-50 to-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 max-w-2xl">
          Discover &amp; book experiences worldwide
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-xl">
          Browse, search, filter, and save curated travel experiences from every
          corner of the planet.
        </p>
        <div className="mt-8 w-full flex justify-center">
          <SearchBar value={search} onChange={setSearch} onSubmit={handleSearch} size="lg" />
        </div>
        <Link
          href="/experiences"
          className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 underline"
        >
          or browse all experiences
        </Link>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Experiences wherever you&apos;re going
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {destinations.map(({ destination, imageUrl }) => (
            <Link
              key={destination}
              href={`/experiences?destination=${encodeURIComponent(destination)}`}
              className="shrink-0 w-40"
            >
              <div className="relative h-40 w-40 rounded-2xl overflow-hidden">
                <Image src={imageUrl} alt={destination} fill className="object-cover" />
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {destination.split(",")[0]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
