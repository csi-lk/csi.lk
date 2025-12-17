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

## Tech Stack

SilkOS v3 uses a minimal, zero-build stack optimized for PocketHost deployment:

### Core Technologies

- **PocketBase** - Backend runtime providing:
  - User authentication and authorization
  - SQLite database with real-time subscriptions
  - File storage and serving
  - Admin UI for data management

- **PocketPages** - Server-side rendering:
  - EJS templates for HTML generation
  - No build step required
  - Templates live in `pb_public/`

- **HTMX** - Progressive enhancement:
  - Partial page updates without full reloads
  - Form submissions with inline feedback
  - List refresh and inline actions
  - Server returns HTML fragments, not JSON

### Why This Stack?

**Minimal Dependencies**
- No Node.js build process
- No client-side framework (React, Vue, etc.)
- No complex bundling or transpilation
- Direct deployment to PocketHost via FTPS

**PocketHost-Friendly**
- PocketBase runs natively on PocketHost
- No custom runtime configuration needed
- `pb_hooks/`, `pb_migrations/`, `pb_public/` map directly to PocketHost structure

**Progressive Enhancement**
- Public pages work without JavaScript (SSR only)
- Private app pages use HTMX for enhanced UX
- Degrades gracefully if JavaScript disabled

**Long-Term Maintainability**
- Fewer abstractions to maintain
- Standard web platform APIs
- Easy to reason about server/client boundary

## HTMX Conventions

HTMX is included via CDN (pinned version 1.9.10) and used for progressive enhancement only.

### When to Use HTMX

**Use server-rendered navigation by default.** Only use HTMX for:

1. **Inline actions** - Mark as processed, archive, delete
   ```html
   <button hx-post="/api/notes/123/archive" hx-swap="outerHTML">
     Archive
   </button>
   ```

2. **List refresh** - Update inbox without full page reload
   ```html
   <div hx-get="/app/inbox/list" hx-trigger="every 30s">
     <!-- inbox items -->
   </div>
   ```

3. **Form submit** - Submit forms without full reload (optional)
   ```html
   <form hx-post="/app/capture" hx-target="#result">
     <!-- form fields -->
   </form>
   ```

### HTMX Rules

- **Server responses**: Always return partial HTML fragments, never JSON
- **hx-boost**: Only use `hx-boost="true"` where it improves UX and doesn't break navigation
- **No client frameworks**: No Alpine.js, Vue, React in v1 (pure HTMX + vanilla JS only)
- **Progressive enhancement**: Pages must work without JavaScript

### Example: Inline Action

```html
<!-- Server returns replacement HTML fragment -->
<button
  hx-post="/api/notes/123/process"
  hx-swap="outerHTML"
  hx-indicator="#spinner">
  Process Note
</button>
```

## Routing and File Organization

### URL Namespace

- **Public routes**: `/` and `/public/*`
  - Static content, public pages
  - No authentication required
  - Example: `/`, `/public/about`

- **Private routes**: `/app/*`
  - All SilkOS functionality
  - Requires authentication
  - Example: `/app`, `/app/inbox`, `/app/capture`

- **Note viewing**: `/app/notes/:id`
  - Private namespace for note access
  - Keeps URLs clean and predictable

### File Organization

**PocketBase Hooks**:
- Route handlers: `pb_hooks/routes/*.pb.js`
- Libraries: `pb_hooks/lib/*.pb.js`
- Example: `pb_hooks/routes/app.pb.js`, `pb_hooks/lib/auth.pb.js`

**PocketPages Templates**:
- Page templates: `pb_public/pages/*.html` or `*.ejs`
- Layouts: `pb_public/_layouts/*.ejs`
- Static assets: `pb_public/css/`, `pb_public/js/`

**Current Routes**:
- `/` - Public landing page (`pb_public/index.html`)
- `/login` - Authentication (`pb_public/login.html`)
- `/app` - OS shell (`pb_hooks/app.pb.js`)
- `/healthz` - Health check (`pb_hooks/healthcheck.pb.js`)
- `/logout` - Session end (`pb_hooks/logout.pb.js`)

### Auth Guard Convention

All `/app/*` routes use the shared auth guard helper:

```javascript
// pb_hooks/lib/auth.pb.js
function requireAuth(c, redirectPath) {
  const authRecord = c.get("authRecord");
  if (!authRecord) {
    return c.redirect(302, `/login?next=${encodeURIComponent(redirectPath || c.path())}`);
  }
  return true;
}
```

Usage in route handlers:

```javascript
routerAdd("GET", "/app/inbox", (c) => {
  const authRecord = c.get("authRecord");
  if (!authRecord) {
    return c.redirect(302, `/login?next=/app/inbox`);
  }

  // Render inbox page...
});
```
