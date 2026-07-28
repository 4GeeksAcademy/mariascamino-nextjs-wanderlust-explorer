"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  size?: "md" | "lg";
  onSubmit?: () => void;
}

export default function SearchBar({
  value,
  onChange,
  size = "md",
  onSubmit,
}: SearchBarProps) {
  const isLarge = size === "lg";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className={`relative flex items-center w-full ${
        isLarge ? "sm:max-w-2xl" : "sm:max-w-xs"
      }`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Find experiences and destinations"
        className={`w-full rounded-full border border-slate-200 bg-white shadow-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isLarge ? "px-6 py-4 pr-32 text-base" : "px-4 py-2 pr-9 text-sm"
        }`}
      />
      {value && !isLarge && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 text-slate-400 hover:text-slate-700"
        >
          ✕
        </button>
      )}
      {isLarge && (
        <button
          type="submit"
          className="absolute right-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 transition-colors"
        >
          Search
        </button>
      )}
    </form>
  );
}
