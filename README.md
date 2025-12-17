# csi.lk v3

Callum Silcock's personal operating system for thinking, capture, and publishing.

## Deployment

- **`main` branch**: Deploys legacy site to GitHub Pages
- **`v3` branch**: Deploys to PocketHost at `csilk.pockethost.io` (temporary staging)

## Architecture

This v3 rebuild uses PocketBase as the runtime environment:

- `pb_hooks/` - PocketBase JavaScript hooks for business logic
- `pb_migrations/` - Database migrations
- `pb_public/` - Static assets and PocketPages templates
- `.github/workflows/` - CI/CD deployment automation
- `scripts/` - Build scripts and utilities

PocketHost deployment expects the `pb_*` directories directly (not a Node.js build artifact).
