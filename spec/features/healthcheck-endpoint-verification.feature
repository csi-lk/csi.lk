@UI-002
Feature: Healthcheck endpoint verification

  """
  Healthcheck endpoint is implemented as a simple PocketBase hook route. Returns JSON response with no database queries. Designed for deployment verification and monitoring.
  """

  # ========================================
  # EXAMPLE MAPPING CONTEXT
  # ========================================
  #
  # BUSINESS RULES:
  #   1. Healthcheck endpoint must be accessible without authentication
  #   2. Response must be HTTP 200 OK
  #   3. Response must contain JSON with ok, service, and version fields
  #
  # EXAMPLES:
  #   1. User visits https://csilk.pockethost.io/healthz and receives {"ok": true, "service": "csi.lk", "version": "v3"}
  #
  # ========================================

  Background: User Story
    As a deployment verification user
    I want to check if the deployment is live
    So that I can quickly confirm the service is running without logging in

  Scenario: Access healthcheck endpoint without authentication
    Given the service is deployed and running
    When I send a GET request to "/healthz"
    Then the response status code should be 200
    And the response should be valid JSON
    And the JSON should contain "ok" with value true
    And the JSON should contain "service" with value "csi.lk"
    And the JSON should contain "version" field
