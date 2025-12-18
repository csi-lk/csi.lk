/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration with debug test plugin
 */

// Simple test plugin to verify plugins execute
const testPlugin = (config, options) => {
  return {
    onRequest(context) {
      // Set a test flag on request to prove the plugin ran
      context.request._pluginRan = true;
    }
  };
};

module.exports = {
  plugins: [
    testPlugin
  ],
  debug: true
};
