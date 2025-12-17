# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Callum Silcock's personal website (csi.lk) - currently in v3 rebuild phase. The repository has been wiped clean from v2 (tagged as `csilk-v2`) and is ready for a fresh implementation.

## Repository State

This is a blank slate repository containing only:
- Minimal `package.json` (name, description, keywords, license)
- Basic documentation files (README.md, CHANGELOG.md, SECURITY.md)
- Configuration files (.editorconfig, CNAME)
- GitHub settings (.github/CODEOWNERS)

No build system, dependencies, or source code exists yet. The architecture and tooling for v3 will be defined as development progresses.

## Previous Version (v2)

The previous version (tagged `csilk-v2`) was built with:
- Custom JSX factory called "Silk" for server-side rendering
- 11ty (Eleventy) static site generator
- TypeScript with JSX support
- PostCSS for styling
- No frontend JavaScript (pure static HTML output)

The v2 architecture can be referenced from the `csilk-v2` tag if needed, but v3 is a complete rebuild with no constraints from the previous implementation.

## Commit Conventions

This repository follows **Conventional Commits** specification:

- Use conventional commit format: `type(scope): description`
- Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `perf`
- **Do NOT use emojis in commit messages**
- **Do NOT add Co-Authored-By attribution for Claude**

Example commit messages:
```
feat(auth): add user login endpoint
fix(api): resolve CORS issue on production
chore: update dependencies
docs: add API documentation
```
