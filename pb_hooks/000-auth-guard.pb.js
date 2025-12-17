/// <reference path="../pb_data/types.d.ts" />

/**
 * Authentication guard for /app route
 * File named with 000- prefix to ensure it runs before PocketPages
 */
routerAdd("GET", "/app", (c) => {
  const authRecord = c.get("authRecord");

  if (!authRecord) {
    return c.redirect(302, `/login?next=${encodeURIComponent(c.path())}`);
  }

  // For now, return a simple HTML response to test auth works
  // TODO: Integrate with PocketPages template rendering
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SilkOS</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <link rel="stylesheet" href="/assets/silk.css">
</head>
<body>
  <header class="silk-header">
    <div class="container">
      <h1>SilkOS</h1>
      <nav>
        <a href="/app">Home</a>
        <form style="display: inline; margin: 0;" method="POST" action="/logout">
          <button type="submit" style="background: none; border: none; color: inherit; cursor: pointer; text-decoration: underline;">Logout</button>
        </form>
      </nav>
    </div>
  </header>
  <main class="container">
    <article>
      <h2>Status</h2>
      <p>
        <strong>User:</strong> ${authRecord.email()}<br>
        <strong>Version:</strong> v3
      </p>
    </article>
    <p>Welcome to SilkOS. This is the OS shell placeholder.</p>
  </main>
</body>
</html>
  `;

  return c.html(200, html);
});
