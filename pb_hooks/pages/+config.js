/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * Uses official auth plugin loaded from pb_hooks/lib
 */

module.exports = {
  plugins: [
    `${__hooks}/lib/pocketpages-plugin-js-sdk`,
    `${__hooks}/lib/pocketpages-plugin-auth`,
  ],
  debug: false
};
