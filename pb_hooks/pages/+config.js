/// <reference path="../../pb_data/types.d.ts" />

/**
 * PocketPages configuration with inline auth plugin
 * Based on pocketpages-plugin-auth source code
 */

const inlineAuthPlugin = (config, options) => {
  const safeParseJson = (value) => {
    if (!value) return value;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  return {
    name: 'inline-auth',

    onRequest: ({ request, response }) => {
      const { auth } = request;

      // Skip if auth already set
      if (auth) return;

      // Check for pb_auth cookie
      const cookieRecordAuth = safeParseJson(request.cookies("pb_auth"));

      if (typeof cookieRecordAuth !== "object") {
        return;
      }

      // Validate token and set auth
      if (cookieRecordAuth?.token) {
        try {
          const validAuthRecord = $app.findAuthRecordByToken(cookieRecordAuth.token);

          if (!validAuthRecord) {
            response.cookie("pb_auth", "");
            return;
          }

          // Enrich request event with auth record
          $apis.enrichRecord(request.event, validAuthRecord);
          request.auth = validAuthRecord;
          request.authToken = cookieRecordAuth.token;
        } catch (e) {
          // Token validation failed
        }
      }
    }
  };
};

module.exports = {
  plugins: [
    inlineAuthPlugin
  ],
  debug: false
};
