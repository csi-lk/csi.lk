/// <reference path="../pb_data/types.d.ts" />

/**
 * Public route handlers for index and login pages
 */

// Index page
routerAdd("GET", "/", (c) => {
  const html = $template.loadFiles(
    `${__hooks}/pages/index.ejs`
  ).render({});

  return c.html(200, html);
});

// Login page
routerAdd("GET", "/login", (c) => {
  const html = $template.loadFiles(
    `${__hooks}/pages/login.ejs`
  ).render({});

  return c.html(200, html);
});
