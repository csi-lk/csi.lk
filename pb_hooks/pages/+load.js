/// <reference path="../../pb_data/types.d.ts" />

/**
 * Global load script - validates pb_auth cookie and sets request.auth
 * This replicates what the auth plugin's onRequest hook does
 */
module.exports = function(request, response) {
  const debug = {
    alreadyAuth: !!request.auth,
    hasEvent: !!request.event,
    hasCookie: false,
    cookieValue: null,
    hasToken: false,
    foundRecord: false,
    error: null
  };

  // Skip if already authenticated
  if (request.auth) {
    return { debug };
  }

  // Try to get pb_auth cookie from the HTTP request
  const httpRequest = request.event?.request();
  if (!httpRequest) {
    debug.error = 'No HTTP request';
    return { debug };
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
  debug.hasCookie = !!cookieValue;
  debug.cookieValue = cookieValue ? cookieValue.substring(0, 50) + '...' : null;

  if (!cookieValue) {
    return { debug };
  }

  try {
    // Parse cookie (it's JSON stringified)
    const authData = JSON.parse(cookieValue);
    debug.hasToken = !!authData.token;

    if (!authData.token) {
      return { debug };
    }

    // Validate the token and get the auth record
    const record = $app.findAuthRecordByToken(authData.token);
    debug.foundRecord = !!record;

    if (!record) {
      return { debug };
    }

    // Set request.auth for downstream pages
    request.auth = record;
    request.authToken = authData.token;

  } catch (error) {
    debug.error = error.message;
  }

  return { debug };
};
