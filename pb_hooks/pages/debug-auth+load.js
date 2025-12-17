/// <reference path="../../pb_data/types.d.ts" />

/**
 * Debug page to inspect auth state
 */
module.exports = function(request, response) {
  return {
    request: {
      auth: request.auth,
      isAuthenticated: request.isAuthenticated,
      event: {
        hasAuthRecord: !!request.event?.get("authRecord")
      }
    }
  };
};
