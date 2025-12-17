/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * Uses official auth plugin loaded from node_modules
 */

module.exports = {
  plugins: [
    'pocketpages-plugin-js-sdk',
    'pocketpages-plugin-auth',
  ],
  debug: false
};
