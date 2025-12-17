/// <reference path="../pb_data/types.d.ts" />

// Load auth helper
const requireAuth = require(`${__hooks}/lib/auth.pb.js`);

/**
 * Private app entry point
 * Requires authentication, redirects to /login if not authenticated
 */
routerAdd("GET", "/app", (c) => {
  // Check authentication
  const authRecord = c.get("authRecord");

  if (!authRecord) {
    const loginUrl = `/login?next=${encodeURIComponent("/app")}`;
    return c.redirect(302, loginUrl);
  }

  // Render app template with user data
  return c.render("app.ejs", {
    userEmail: authRecord.email()
  });
});
