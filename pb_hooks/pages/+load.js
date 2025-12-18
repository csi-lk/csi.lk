/// <reference path="../../pb_data/types.d.ts" />

/**
 * Global load script - validates pb_auth cookie and sets request.auth
 * This replicates what the auth plugin's onRequest hook does
 */
module.exports = function(request, response) {
  // Skip if already authenticated
  if (request.auth) {
    return {};
  }

  // Try to get pb_auth cookie
  const cookieValue = request.cookie('pb_auth');
  if (!cookieValue) {
    return {};
  }

  try {
    // Parse cookie (it's JSON stringified)
    const authData = JSON.parse(cookieValue);

    if (!authData.token) {
      // Invalid cookie, clear it
      response.cookie('pb_auth', '');
      return {};
    }

    // Validate the token and get the auth record
    const record = $app.findAuthRecordByToken(authData.token);

    if (!record) {
      // Invalid token, clear cookie
      response.cookie('pb_auth', '');
      return {};
    }

    // Set request.auth for downstream pages
    request.auth = record;
    request.authToken = authData.token;

  } catch (error) {
    // Invalid cookie format, clear it
    response.cookie('pb_auth', '');
  }

  return {};
};
