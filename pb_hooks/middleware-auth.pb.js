/// <reference path="../pb_data/types.d.ts" />

/**
 * Authentication guard for /app routes
 *
 * This hook runs before serving any request, checking authentication
 * for all /app/* routes and redirecting to login if not authenticated.
 */
onBeforeServe((e) => {
  e.router.use((next) => {
    return (c) => {
      const path = c.path();

      // Only apply to /app/* routes
      if (path.startsWith('/app')) {
        const authRecord = c.get("authRecord");

        if (!authRecord) {
          // Not authenticated - redirect to login with next parameter
          const loginUrl = `/login?next=${encodeURIComponent(path)}`;
          return c.redirect(302, loginUrl);
        }
      }

      // Continue to next handler (including PocketPages)
      return next(c);
    };
  });
});
