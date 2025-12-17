/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * Defines plugins and processing options
 */

// Simple inline auth plugin that checks PocketBase auth
const authPlugin = (config, options) => {
  return {
    name: 'inline-auth',

    // Before hooks run before the page is processed
    before: (request, response) => {
      // Get the authenticated record from PocketBase
      const authRecord = request.context.get("authRecord");

      // Attach auth info to request for easy access in pages
      request.auth = authRecord || null;
      request.isAuthenticated = !!authRecord;

      return { request, response };
    }
  };
};

module.exports = {
  plugins: [
    authPlugin
  ],
  debug: false
};
