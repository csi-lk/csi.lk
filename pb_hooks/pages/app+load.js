/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for /app page
 * Provides authenticated user data to template
 *
 * Note: Auth protection is handled by middleware-auth.pb.js
 * This function only runs after successful authentication
 */
module.exports = function(api) {
  const authRecord = api.ctx.get("authRecord");

  return {
    userEmail: authRecord.email(),
    userId: authRecord.id
  };
};
