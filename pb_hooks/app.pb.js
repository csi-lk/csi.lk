/// <reference path="../pb_data/types.d.ts" />

// Load auth helper
const requireAuth = require(`${__hooks}/lib/auth.pb.js`);

/**
 * Private app entry point
 * Requires authentication, redirects to /login if not authenticated
 */
routerAdd("GET", "/app", (c) => {
  // Check authentication
  const authRecord = c.get("authRecord");

  if (!authRecord) {
    const loginUrl = `/login?next=${encodeURIComponent("/app")}`;
    return c.redirect(302, loginUrl);
  }

  // Render app shell
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SilkOS</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    header {
      background: #f5f5f5;
      border-bottom: 1px solid #ddd;
      padding: 1rem 2rem;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-size: 1.25rem;
      font-weight: 600;
    }

    nav a {
      color: #666;
      text-decoration: none;
      margin-left: 1rem;
    }

    nav a:hover {
      color: #0066cc;
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .status {
      background: #f9f9f9;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .status h2 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .status-item {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
    }

    .status-label {
      color: #666;
      margin-right: 0.5rem;
    }

    .logout-form {
      display: inline;
    }

    .logout-btn {
      background: none;
      border: none;
      color: #0066cc;
      cursor: pointer;
      padding: 0;
      font: inherit;
    }

    .logout-btn:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <header>
    <div class="header-content">
      <h1>SilkOS</h1>
      <nav>
        <a href="/app">Home</a>
        <form class="logout-form" method="POST" action="/logout">
          <button type="submit" class="logout-btn">Logout</button>
        </form>
      </nav>
    </div>
  </header>

  <main>
    <div class="status">
      <h2>Status</h2>
      <div class="status-item">
        <span class="status-label">User:</span>
        <strong>${authRecord.email()}</strong>
      </div>
      <div class="status-item">
        <span class="status-label">Version:</span>
        <strong>v3</strong>
      </div>
    </div>

    <p>Welcome to SilkOS. This is the OS shell placeholder.</p>
  </main>
</body>
</html>
  `;

  return c.html(200, html);
});
