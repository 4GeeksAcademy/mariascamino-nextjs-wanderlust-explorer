"use client";

import Image from "next/image";
import userData from "@/data/user.json";
import { useFavorites } from "@/hooks/useFavorites";
import { UserProfile } from "@/types";

const user = userData as UserProfile;

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="flex flex-col items-center text-center gap-4 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <div className="relative h-24 w-24 rounded-full overflow-hidden">
          <Image src={user.avatarUrl} alt={user.name} fill className="object-cover" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">{user.name}</h1>
        <p className="text-sm text-slate-500">{user.email}</p>
        <p className="text-slate-700 leading-relaxed">{user.bio}</p>
        <div className="mt-4 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          {favoriteIds.length} saved favorites
        </div>
      </div>
    </div>
  );
}
