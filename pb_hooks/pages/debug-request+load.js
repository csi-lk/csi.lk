/// <reference path="../../pb_data/types.d.ts" />

module.exports = function(request, response) {
  return {
    hasAuth: !!request.auth,
    authId: request.auth?.id || null,
    authEmail: request.auth?.email() || null,
    hasAuthToken: !!request.authToken,
    authToken: request.authToken ? request.authToken.substring(0, 20) + '...' : null,
    isAuthenticated: request.isAuthenticated,
    cookies: request.cookies('pb_auth') ? 'present' : 'absent',
  };
};
