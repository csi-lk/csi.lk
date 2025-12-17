/// <reference path="../pb_data/types.d.ts" />

/**
 * Authentication middleware for /app/* routes
 *
 * Protects all application routes by checking for authenticated user.
 * Redirects to /login with next parameter if not authenticated.
 */
routerUse((next) => {
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

    // Continue to next handler
    return next(c);
  };
});
