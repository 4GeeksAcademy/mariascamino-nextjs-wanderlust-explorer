# Design Guidelines: Wanderlust Explorer

## Visual System & PNG References
- CSS Framework: Tailwind CSS
- Design Source: Rely strictly on the PNG mockups located inside the `./references` directory as visual guidance.
- Layout: Fully responsive (Mobile-first, Tablet, Desktop grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).

## Core Components Specs

### Navbar (`src/components/Navbar.tsx`)
- Fixed at the top across all pages.
- Navigation links: Home (`/`), Explorer (`/experiences`), Favorites (`/favorites`), Profile (`/profile`).
- Active link highlighting using `usePathname()`.

### ExperienceCard (`src/components/ExperienceCard.tsx`)
- Designed according to PNG references in `./references`.
- Card image with floating badge for `category`.
- Title, destination, rating with star icon, price per person.
- Interactive Heart icon button (solid red when favorited, outlined when not).

### SearchBar & FilterBar (`src/components/SearchBar.tsx`, `src/components/FilterBar.tsx`)
- Search input with clear button.
- Category dropdown/buttons ('Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature').
- Destination dropdown/input.
- Clear/Reset filters action.

### States & UX
- "No results found" fallback state when combined filters return 0 items.
- Smooth client-side navigation using Next.js `<Link>` without full page reloads.

## Documentation Requirement
- Reference the PNG files from `./references` in the `## Design References` section of `README.md`.