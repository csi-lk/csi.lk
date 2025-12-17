/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for /app page
 * Handles authentication and provides user data
 */
module.exports = function(api) {
  const { redirect } = api;
  const authRecord = api.ctx.get("authRecord");

  if (!authRecord) {
    const loginUrl = `/login?next=${encodeURIComponent("/app")}`;
    return redirect(loginUrl);
  }

  return {
    userEmail: authRecord.email()
  };
};
