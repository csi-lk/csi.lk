/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * Defines plugins and processing options
 */

// Auth passthrough plugin
// The 000-auth-middleware.pb.js file runs first and enriches the context
// This plugin just exposes that auth data on the request object
const authPlugin = (config, options) => {
  return {
    name: 'auth-passthrough',

    // Extract auth from context and attach to request
    onRequest: ({ request, response }) => {
      // Get the authRecord that was set by 000-auth-middleware.pb.js
      const authRecord = request.event.get("authRecord");

      // Attach to request for easy access in +load.js files
      request.auth = authRecord || null;
      request.isAuthenticated = !!authRecord;
    }
  };
};

module.exports = {
  plugins: [
    authPlugin
  ],
  debug: true  // Enable debug logging to see if this loads
};
