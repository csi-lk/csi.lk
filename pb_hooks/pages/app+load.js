/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for /app page
 * Handles authentication and provides user data to template
 */
module.exports = function(api) {
  const authRecord = api.ctx.get("authRecord");

  // Check authentication
  if (!authRecord) {
    // Redirect to login with next parameter
    const path = api.ctx.path();
    const loginUrl = `/login?next=${encodeURIComponent(path)}`;
    api.ctx.redirect(302, loginUrl);
    return; // PocketPages will handle the redirect
  }

  // Return authenticated user data
  return {
    userEmail: authRecord.email(),
    userId: authRecord.id
  };
};
