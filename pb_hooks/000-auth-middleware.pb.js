/// <reference path="../pb_data/types.d.ts" />

/**
 * Authentication middleware that runs BEFORE PocketPages
 * File named with 000- prefix to ensure it loads first
 *
 * This extracts auth from pb_auth cookie and makes it available
 * to PocketPages via the context, which PocketPages should then
 * expose as request.auth.
 */

onBeforeServe((e) => {
  e.router.pre((next) => {
    return (c) => {
      try {
        // Check for pb_auth cookie
        const authCookie = c.cookie("pb_auth");

        if (authCookie) {
          try {
            const authData = JSON.parse(authCookie);

            if (authData?.token) {
              // Find the auth record by token
              const authRecord = $app.findAuthRecordByToken(authData.token);

              if (authRecord) {
                // Enrich the context with the auth record
                // This makes it available via c.get("authRecord")
                $apis.enrichRecord(c, authRecord);
              }
            }
          } catch (parseError) {
            // Invalid JSON in cookie, ignore
          }
        }
      } catch (error) {
        // Log error but don't break the request
        console.error('Auth middleware error:', error);
      }

      return next(c);
    };
  });
});
