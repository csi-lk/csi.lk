/// <reference path="../../pb_data/types.d.ts" />

/**
 * Load function for /app page
 * Requires authentication - redirects to login if not authenticated
 */
module.exports = function(request, response) {
  // Check if user is authenticated (set by auth plugin in +config.js)
  if (!request.auth) {
    // Redirect to login with next parameter
    const loginUrl = `/login?next=${encodeURIComponent(request.url.pathname)}`;
    response.redirect(loginUrl);
    return;
  }

  // Return authenticated user data for the template
  return {
    userEmail: request.auth.email(),
    userId: request.auth.id
  };
};
