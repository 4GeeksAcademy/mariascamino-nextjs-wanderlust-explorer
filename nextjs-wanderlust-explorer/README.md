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

Pendiente: agregar los PNG de diseño en `./references/` y ajustar estilos de `ExperienceCard`, `Navbar`, `SearchBar` y `FilterBar` para que calcen exactamente con los mocks. Por ahora, los componentes siguen las especificaciones de `design.md` (colores neutros, cards con badge de categoría, corazón de favorito, grid responsive) pero no un PNG concreto.
