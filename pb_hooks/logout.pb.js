/// <reference path="../pb_data/types.d.ts" />

/**
 * Logout endpoint
 * Clears the authentication session and redirects to home
 */
routerAdd("POST", "/logout", (c) => {
  // Clear the auth store
  c.set("authStore", null);

  // Redirect to home
  return c.redirect(302, "/");
}, $apis.requireGuestOnly());

routerAdd("GET", "/logout", (c) => {
  // Also support GET for convenience
  c.set("authStore", null);
  return c.redirect(302, "/");
});
