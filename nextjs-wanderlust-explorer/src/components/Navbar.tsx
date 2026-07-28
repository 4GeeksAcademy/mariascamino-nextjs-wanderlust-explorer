"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/experiences", label: "Explore", icon: CompassIcon },
  { href: "/favorites", label: "Favorites", icon: HeartIcon },
  { href: "/profile", label: "Profile", icon: UserIcon },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-slate-200">
      <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
        <Link href="/" className="text-lg font-extrabold text-slate-900 tracking-tight">
          Wanderlust<span className="text-blue-600"> Explorer</span>
        </Link>
        <ul className="flex gap-6">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex flex-col items-center gap-0.5 text-xs font-medium transition-colors ${
                    isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-5 w-5" filled={isActive} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function HomeIcon({ className }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5 12 4l9 7.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"
      />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.5 9.5-1.8 4.7a1 1 0 0 1-.5.5L7.5 16.5l1.8-4.7a1 1 0 0 1 .5-.5z"
      />
    </svg>
  );
}

function HeartIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
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

function UserIcon({ className }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  );
}
