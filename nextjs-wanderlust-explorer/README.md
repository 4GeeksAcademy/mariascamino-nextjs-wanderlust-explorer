# Wanderlust Explorer

Aplicación multi-página construida con Next.js (App Router), React y TypeScript. Permite explorar, buscar, filtrar y marcar como favoritas experiencias de viaje.

## Getting Started

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run lint` — ESLint

## Estructura clave

- `src/types/index.ts` — tipos `Experience` y `UserProfile`.
- `src/data/experiences.ts` — 100 experiencias mock.
- `src/data/user.json` — usuario de perfil.
- `src/context/FavoritesContext.tsx` + `src/hooks/useFavorites.ts` — estado de favoritos (useState + useContext, sin librerías externas ni localStorage).
- `src/hooks/useExperiences.ts` — búsqueda y filtros sincronizados con la URL.
- `src/components/` — `Navbar`, `ExperienceCard`, `SearchBar`, `FilterBar`.
- `src/app/` — páginas: `/`, `/experiences`, `/experiences/[id]`, `/favorites`, `/profile`.

## Design References

Los mocks visuales usados como blueprint están en `./references/`:

- `reference-home.png` / `reference-home2.png` — inspiraron el hero con buscador grande y el bloque de destinos destacados en `/` (`src/app/page.tsx`).
- `reference-search-results.png` — inspiró la grilla de tarjetas y la barra de filtros en pills de `/experiences` (`src/components/ExperienceCard.tsx`, `src/components/FilterBar.tsx`).
- `reference-experience-detail.png` — inspiró el layout de dos columnas (imagen + descripción a la izquierda, tarjeta de precio fija a la derecha) de `/experiences/[id]`.

Paleta adoptada de las referencias: fondo blanco/gradiente celeste claro, texto principal en slate-900, acento azul (blue-600) para botones y estados activos.
