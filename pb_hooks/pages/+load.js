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

  // Try to get pb_auth cookie from the HTTP request
  const httpRequest = request.event?.request();
  if (!httpRequest) {
    return {};
  }

  const cookieHeader = httpRequest.header.get('Cookie') || '';
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    if (key && value) {
      acc[key] = decodeURIComponent(value);
    }
    return acc;
  }, {});

  const cookieValue = cookies['pb_auth'];
  if (!cookieValue) {
    return {};
  }

  try {
    // Parse cookie (it's JSON stringified)
    const authData = JSON.parse(cookieValue);

    if (!authData.token) {
      return {};
    }

    // Validate the token and get the auth record
    const record = $app.findAuthRecordByToken(authData.token);

    if (!record) {
      return {};
    }

    // Set request.auth for downstream pages
    request.auth = record;
    request.authToken = authData.token;

  } catch (error) {
    // Invalid cookie format, ignore
  }

  return {};
};
