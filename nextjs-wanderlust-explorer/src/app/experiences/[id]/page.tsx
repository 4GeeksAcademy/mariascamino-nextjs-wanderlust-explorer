import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { EXPERIENCES_DATA } from "@/data/experiences";
import FavoriteToggleButton from "@/components/FavoriteToggleButton";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = EXPERIENCES_DATA.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link href="/experiences" className="text-sm text-slate-500 hover:text-slate-900">
        ← Back to Explorer
      </Link>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden">
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <span className="inline-block w-fit bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
              {experience.category}
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900">{experience.title}</h1>
            <p className="text-slate-500">{experience.destination}</p>
            <p className="mt-4 text-slate-700 leading-relaxed">{experience.description}</p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4">
          <div>
            <span className="text-sm text-slate-500">From</span>
            <div className="text-3xl font-extrabold text-slate-900">
              ${experience.price}
              <span className="text-sm font-medium text-slate-500"> / person</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-slate-700">
            <StarIcon /> <span className="font-semibold">{experience.rating.toFixed(1)}</span>
            <span className="text-slate-500 text-sm">rating</span>
          </div>
          <FavoriteToggleButton id={experience.id} />
        </aside>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-amber-400">
      <path d="M12 2l2.9 6.26 6.9.6-5.2 4.5 1.6 6.74L12 16.9l-6.2 3.2 1.6-6.74-5.2-4.5 6.9-.6L12 2z" />
    </svg>
  );
}
