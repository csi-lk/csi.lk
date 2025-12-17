/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for login page
 * Provides page title and HTMX flag
 */
module.exports = function(c) {
  return {
    pageTitle: 'Login - SilkOS',
    htmx: false
  };
};
