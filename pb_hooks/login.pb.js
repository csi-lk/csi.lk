/// <reference path="../pb_data/types.d.ts" />

/**
 * Login page route
 * Renders the login.ejs template
 */
routerAdd("GET", "/login", (c) => {
  return c.render("login.ejs", {
    pageTitle: 'Login - SilkOS',
    htmx: false
  });
});
