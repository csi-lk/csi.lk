/// <reference path="../pb_data/types.d.ts" />

/**
 * Healthcheck endpoint
 * Returns basic health status and version information
 */
routerAdd("GET", "/healthz", (c) => {
  return c.json(200, {
    ok: true,
    service: "csi.lk",
    version: "v3"
  });
});
