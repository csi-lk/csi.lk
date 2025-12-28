/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration
 * PocketHost automatically runs `bun install` to install dependencies from package.json
 * with the correct Linux architecture (not deployed from macOS)
 */

module.exports = {
  plugins: [
    'pocketpages-plugin-js-sdk',
    'pocketpages-plugin-auth'
  ],
  debug: true
};
