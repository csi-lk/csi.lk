# PocketPages Plugin Investigation Results

## Problem
Login system fails because `request.auth` is always null, even with valid pb_auth cookie.

## Investigation Process

### Attempt 1: Bundle Auth Plugin Code
- Bundled `pocketpages-plugin-auth` code into `+config.js`
- Result: Plugin loaded but hooks never executed

### Attempt 2: Use npm Package Reference
- Changed config to `plugins: ['pocketpages-plugin-auth']`
- Result: Package not found (PocketHost doesn't deploy node_modules)

### Attempt 3: Test with Minimal Plugin
- Created simple test plugin with logging
- Result: Factory called, plugin object created, but hooks NEVER executed

## Root Cause

**PocketPages only executes hooks for plugins loaded from npm packages by string name.**

Inline/bundled plugins in `+config.js`:
- ✅ Factory functions get called
- ✅ Plugin objects get created
- ✅ Hooks are present in the object
- ❌ Hooks are NEVER invoked by PocketPages

## Evidence

```
Logs show:
- [testPlugin] Factory called with config: true
- [testPlugin] Returning plugin object with hooks: name,onRequest,onRender
- (onRequest hook NEVER called even with valid requests)
- (onRender hook NEVER called even when rendering pages)
```

## Conclusion

Cannot use auth plugin on PocketHost because:
1. PocketHost doesn't deploy node_modules (can't use plugin packages)
2. Bundled plugins don't have hooks executed (can't inline plugin code)

## Working Solution

**Manual authentication validation** using native PocketBase JSVM APIs:

```javascript
//pb_hooks/pages/app.ejs
<%
const cookieValue = /* parse from request somehow */;
if (cookieValue) {
  const authData = JSON.parse(cookieValue);
  const record = $app.findAuthRecordByToken(authData.token);
  if (!record) {
    response.redirect('/login');
    return;
  }
  // Use record for user info
}
%>
```

The login API works correctly, we just need to manually validate the cookie in each protected page.
