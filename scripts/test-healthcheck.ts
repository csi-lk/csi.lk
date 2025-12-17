/**
 * Feature: spec/features/healthcheck-endpoint-verification.feature
 *
 * Manual test script for healthcheck endpoint
 */

const HEALTHCHECK_URL = process.env.HEALTHCHECK_URL || "https://csilk.pockethost.io/healthz";

async function testHealthcheck() {
  console.log(`Testing healthcheck endpoint: ${HEALTHCHECK_URL}`);

  // @step Given the service is deployed and running
  console.log("✓ Service should be deployed");

  // @step When I send a GET request to "/healthz"
  const response = await fetch(HEALTHCHECK_URL);

  // @step Then the response status code should be 200
  if (response.status !== 200) {
    throw new Error(`Expected status 200, got ${response.status}`);
  }
  console.log("✓ Status code is 200");

  // @step And the response should be valid JSON
  const data = await response.json();
  console.log("✓ Response is valid JSON");

  // @step And the JSON should contain "ok" with value true
  if (data.ok !== true) {
    throw new Error(`Expected ok=true, got ${data.ok}`);
  }
  console.log("✓ JSON contains ok=true");

  // @step And the JSON should contain "service" with value "csi.lk"
  if (data.service !== "csi.lk") {
    throw new Error(`Expected service="csi.lk", got ${data.service}`);
  }
  console.log("✓ JSON contains service='csi.lk'");

  // @step And the JSON should contain "version" field
  if (!data.version) {
    throw new Error("Expected version field to be present");
  }
  console.log(`✓ JSON contains version='${data.version}'`);

  console.log("\n✅ All healthcheck tests passed!");
  return data;
}

testHealthcheck().catch((error) => {
  console.error("\n❌ Healthcheck test failed:", error.message);
  process.exit(1);
});
