# decision

A choice made and the reasoning behind it — the path taken over the alternatives.

## Demo data is saved in localStorage, with a "Reset demo data" button

- **What:** All dealership data (cars, staff, sales) lives in the browser only, behind the `useDealership()` hook. Every change is written to localStorage under `gbautomotores:data:v1` and survives a reload. "Reset demo data" in the top bar clears the key and restores the seed. There is no server or database.
- **Why:** The setup work order contradicted itself: one requirement said "memory only, a reload restores the seed", while an acceptance criterion said "a reload keeps the change, and Reset restores the seed". The user chose localStorage plus Reset. Modules must change data through `setData()` so the changes are saved; never mutate `data` or keep a separate copy.
- **Where:** `src/lib/store.tsx`, `src/lib/seed.ts`, `src/components/NavBar.tsx`
- **Learned:** 2026-11-18, while setting up the Next.js base app.
