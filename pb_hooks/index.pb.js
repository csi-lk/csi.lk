/// <reference path="../pb_data/types.d.ts" />

/**
 * Public landing page route
 * Renders the index.ejs template
 */
routerAdd("GET", "/", (c) => {
  return c.render("index.ejs", {
    pageTitle: 'Callum Silcock',
    htmx: false
  });
});
