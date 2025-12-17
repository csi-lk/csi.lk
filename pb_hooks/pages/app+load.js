/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for /app page
 *
 * NOTE: This file is not currently used because /app is handled
 * by an explicit route handler in 000-auth-guard.pb.js for authentication.
 * This file is kept for reference and future PocketPages integration.
 */
module.exports = function(api) {
  const authRecord = api.ctx.get("authRecord");

  return {
    userEmail: authRecord ? authRecord.email() : "",
    userId: authRecord ? authRecord.id : ""
  };
};
