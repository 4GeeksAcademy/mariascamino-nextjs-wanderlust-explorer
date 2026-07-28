# Project Context: Wanderlust Explorer

## Overview
Wanderlust Explorer is an interactive multi-page web application for Wanderlust Labs built with Next.js (App Router), React, and TypeScript. Users can browse, search, filter, and favorite curated travel experiences around the world without page reloads.

## Project Setup Commands
- Creation command:
  `npx create-next-app@latest nextjs-wanderlust-explorer --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`

## Visual References & Design Base
- Design Mocks: Use the PNG reference images located in the local `./references` folder (e.g., `./references/*.png`) as the exact visual blueprint for UI layout, color schemes, card structures, and spacing.

## Data Architecture
- Experience items shape (`src/types/index.ts`): `id`, `title`, `description`, `category` ('Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature'), `destination` ("City, Country"), `price`, `rating`, `imageUrl`.
- Dataset location: `src/data/experiences.ts` containing 100 mock experience items.

## Pages & Routing (App Router)
- `/` (Home): Hero section with CTA button navigating to `/experiences`.
- `/experiences` (Explorer): Grid of 100 experience cards, title search bar, category filter, destination filter.
- `/experiences/[id]` (Detail): Comprehensive view for a single experience fetched by ID.
- `/favorites` (Favorites): Displays user favorited experiences.
- `/profile` (Profile): User information card and total count of saved favorites.

## Business Logic & Constraints
1. Search & Filtering:
   - Case-insensitive regex title matching: `new RegExp(term, 'i').test(experience.title)`.
   - Category and destination filters operate independently and stack with search.
   - Sync active search & filters to URL query params using `useSearchParams` and `usePathname`.
   - On page load, read query params to pre-fill search inputs and pre-filter results.
2. Favorites System:
   - Toggle heart icon on cards.
   - Managed via `useState` at shared high-level component and passed down via props.
   - NO `localStorage` or external database persistence required.
3. Component Architecture:
   - Required components: `Navbar`, `ExperienceCard`, `SearchBar`, `FilterBar`.
   - Custom hook required (e.g., `useExperiences` or `useFilters`) to encapsulate filtering logic.
   - `useEffect` required for syncing/side-effects.
   - NO external state management libraries (Redux, Zustand, Recoil).