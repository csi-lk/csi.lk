/// <reference path="../pb_data/types.d.ts" />

/**
 * Authentication guard for /app route
 * File named with 000- prefix to ensure it runs before PocketPages
 */
routerAdd("GET", "/app", (c) => {
  const authRecord = c.get("authRecord");

  if (!authRecord) {
    const path = c.path();
    const loginUrl = "/login?next=" + encodeURIComponent(path);
    return c.redirect(302, loginUrl);
  }

  const userEmail = authRecord.email();
  const html = "<!DOCTYPE html><html><head><title>SilkOS</title></head><body><h1>SilkOS</h1><p>User: " + userEmail + "</p><p><a href='/logout'>Logout</a></p></body></html>";

  return c.html(200, html);
});
