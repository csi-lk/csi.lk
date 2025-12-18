/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * References auth plugin from node_modules (deployed via GitHub Actions)
 */

module.exports = {
  plugins: [
    'pocketpages-plugin-auth'
  ],
  debug: false
};
