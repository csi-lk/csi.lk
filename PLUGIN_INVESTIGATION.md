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

## Root Cause - SOLVED

The issue was **architecture mismatch**:
- We were deploying node_modules built on macOS (darwin) to PocketHost (Linux)
- Different CPU architectures caused native modules to fail
- Plugins loaded but hooks never executed due to binary incompatibility

## Solution

**Let PocketHost install dependencies with correct architecture:**

1. Deploy package.json (already done via FTP)
2. Do NOT deploy node_modules folder
3. PocketHost automatically runs `bun install` on Linux
4. Plugins install with correct architecture and work properly

**Changes made:**
- Removed node_modules deployment from GitHub Actions workflow
- Removed postinstall bundling script from package.json
- Keep simple +config.js with string plugin names:

```javascript
module.exports = {
  plugins: [
    'pocketpages-plugin-js-sdk',
    'pocketpages-plugin-auth'
  ],
  debug: true
};
```

After deleting node_modules from PocketHost via FTP and restarting, plugins should work correctly.
