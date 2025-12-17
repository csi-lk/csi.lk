/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * Plugins are loaded from node_modules (installed server-side by PocketHost)
 */

module.exports = {
  plugins: [
    'pocketpages-plugin-js-sdk',
    'pocketpages-plugin-auth',
  ],
  debug: false
};
