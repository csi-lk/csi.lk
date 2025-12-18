/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * Load auth plugin via require() from deployed node_modules
 */

const jsSdkPlugin = require('pocketpages-plugin-js-sdk');
const authPlugin = require('pocketpages-plugin-auth');

module.exports = {
  plugins: [
    jsSdkPlugin,
    authPlugin
  ],
  debug: false
};
