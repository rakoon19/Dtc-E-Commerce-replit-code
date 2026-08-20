---
name: npm workspace migration
description: The monorepo uses npm workspaces and a generated package-lock.json instead of pnpm protocols or catalogs.
---

Use npm workspace commands for installs, scripts, and managed service workflows. When changing package-manager conventions, remove the prior package manager's generated dependency tree before the first npm install; otherwise npm may report workspace protocol errors from stale virtual-store metadata.

**Why:** npm can inspect stale package metadata under a previous package manager's node_modules tree even when all current workspace manifests are valid.

**How to apply:** Prefer `npm ci` from the repository root for reproducible setup and `npm run <script> --workspace=<package-name>` for targeted package commands.