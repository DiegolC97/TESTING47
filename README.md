# GBAutomotores

A small car dealership management demo built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.
It is for testing only: there is no login and no database.

Modules:

| Route       | Module                                                    |
| ----------- | --------------------------------------------------------- |
| `/`         | Landing page: dealership summary and latest sales          |
| `/stock`    | Cars in stock                                              |
| `/sales`    | Sales                                                      |
| `/personal` | Staff (personal)                                           |

## Requirements

- Node.js 20.9 or newer
- npm

## Install

```bash
npm install
```

## Run in development

```bash
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

`npm run typecheck` runs the TypeScript compiler without emitting files.

## Demo data

The app ships with made-up test data (`src/lib/seed.ts`): 10 cars, 5 staff members and 3 sales.
Shared types live in `src/lib/types.ts`, and every page reads and changes data through the
`useDealership()` hook (`src/lib/store.tsx`).

Changes are saved only in your browser's `localStorage`, so they survive a reload. Nothing is
sent to a server. Click **Reset demo data** in the top bar to restore the original test data.
