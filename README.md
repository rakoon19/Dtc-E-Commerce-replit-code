# NOORÉ — DTC E-Commerce (Fashion + Cosmetics)

A DTC storefront prototype built as an npm workspace monorepo — Vite/React storefront + Express API server. Originally scaffolded on Replit; being migrated to Next.js + MongoDB.

## Requirements

- Node.js 20+
- npm 10+

## Setup

1. **Clone and install**
   ```bash
   git clone https://github.com/rakoon19/Dtc-E-Commerce-replit-code.git
   cd Dtc-E-Commerce-replit-code
   npm install --legacy-peer-deps
   ```
   `--legacy-peer-deps` is required due to an `esbuild` version conflict between the API server and `esbuild-plugin-pino`.

2. **Run the API server** (in one terminal)
   ```bash
   npm run dev --workspace=@workspace/api-server
   ```
   Serves at `http://localhost:8080`

3. **Run the storefront** (in another terminal)
   ```bash
   npm run dev --workspace=@workspace/dtc-storefront
   ```
   Serves at `http://localhost:18905`

## Project structure

```
artifacts/
  api-server/       Express backend (currently just a health check)
  dtc-storefront/    React + Vite storefront (mock data, no backend/auth/payments wired up yet)
  mockup-sandbox/    Component preview server (optional, not required to run the app)
lib/
  db/                Database layer (currently Postgres/Drizzle — migrating to MongoDB/Mongoose)
  api-spec/          OpenAPI contract
  api-client-react/  Generated API client
```

## Current status

This is a frontend prototype — the storefront looks complete but cart/wishlist are browser `localStorage` only, checkout doesn't process payment, and there's no auth or database connected yet. See `replit.md` in the repo root for the full architecture writeup.

## Notes

- `.replit`, `.replitignore`, and `.agents/` are Replit-specific and can be safely ignored/deleted if not using Replit.
- If you hit a `PORT` or `BASE_PATH` error on startup, double check the `.env` files above exist in the right folders.
