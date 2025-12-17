/// <reference path="../pb_data/types.d.ts" />

/**
 * Healthcheck endpoint
 * Returns basic health status and version information
 */
routerAdd("GET", "/healthz", (c) => {
  return c.json(200, {
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "v3",
    service: "csi.lk"
  });
});
