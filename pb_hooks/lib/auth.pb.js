/// <reference path="../../pb_data/types.d.ts" />

/**
 * Reusable authentication guard
 * Checks if user is authenticated and redirects to login if not
 *
 * @param {echo.Context} c - PocketBase context
 * @param {string} [redirectPath] - Optional path to redirect to after login
 * @returns {boolean} - True if authenticated, false if redirected
 */
function requireAuth(c, redirectPath) {
  const authStore = c.get("authStore");

  if (!authStore || !authStore.isValid) {
    const currentPath = redirectPath || c.path();
    const loginUrl = `/login?next=${encodeURIComponent(currentPath)}`;
    return c.redirect(302, loginUrl);
  }

  return true;
}
