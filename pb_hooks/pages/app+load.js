/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for /app page
 * Provides user data (auth protection to be added)
 */
module.exports = function(api) {
  const authRecord = api.ctx.get("authRecord");

  return {
    userEmail: authRecord ? authRecord.email() : "guest@example.com"
  };
};
