/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for index page
 * Provides page title and HTMX flag
 */
module.exports = function(c) {
  return {
    pageTitle: 'Callum Silcock',
    htmx: false
  };
};
