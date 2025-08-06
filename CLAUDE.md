# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Callum Silcock's personal website (csi.lk) - a static site built with a custom JSX-to-HTML approach using 11ty (Eleventy), TypeScript, and PostCSS. The site emphasizes simplicity with no frontend JavaScript.

## Development Commands

**Start development:**
```bash
yarn dev
# Runs: clean → generate:books → styles → scripts → static → images (parallel with serve)
```

**Build for production:**
```bash
yarn build:prod
# Production build with minified CSS and path prefixing
```

**Testing:**
```bash
yarn test           # Run Jest unit tests
yarn lint           # Run ESLint and Stylelint
yarn e2e            # Run Cypress e2e tests (starts dev server automatically)
yarn e2e:local      # Run e2e tests against localhost:3000
yarn e2e:prod       # Run e2e tests against live site
```

**Individual build steps:**
```bash
yarn styles         # Process all CSS with PostCSS
yarn scripts        # Compile TypeScript and rename layouts
yarn static         # Run 11ty build
yarn images         # Copy images from markdown content
yarn generate:books # Generate bookshelf data
```

## Architecture

### Custom JSX Factory ("Silk")

The core innovation is a custom JSX factory (`src/lib/silk.tsx`) that renders JSX components to HTML strings at build time:

- JSX components are written in TypeScript but compiled to static HTML
- No React or frontend JavaScript - pure server-side rendering
- Custom `createElement` function handles JSX syntax
- Components receive props and children, return HTML strings

**TypeScript Configuration:**
```json
{
  "jsx": "react",
  "jsxFactory": "Silk.createElement",
  "jsxFragmentFactory": "Silk.createFragment"
}
```

### Build System Flow

1. **TypeScript Compilation**: JSX components → CommonJS modules
2. **Layout Renaming**: `.js` → `.11ty.js` for 11ty compatibility  
3. **11ty Processing**: Markdown + layouts → HTML pages
4. **CSS Processing**: All CSS files concatenated → PostCSS → single stylesheet
5. **Image Processing**: Images referenced in markdown copied to dist

### Directory Structure

- `src/components/`: Reusable JSX components (header, footer, etc.)
- `src/layouts/`: Page layout templates for different content types
- `src/articles/`, `src/talks/`, `src/jobs/`: Content directories
- `src/lib/silk.tsx`: Custom JSX factory
- `src/styles/`: CSS files (processed into single stylesheet)
- `src/_includes/`: Generated 11ty includes (compiled components/layouts)
- `dist/`: Build output

### 11ty Integration

11ty automatically discovers:
- **Layouts**: Each folder in `layouts/` becomes a layout alias
- **Shortcodes**: Each component becomes a paired shortcode (e.g., `{% BigText %}content{% endBigText %}`)
- **Content**: Markdown files become pages with frontmatter-specified layouts

### Testing Strategy

- **Unit Tests**: Jest for component testing with jsdom
- **E2E Tests**: Cypress for smoke testing
- **Linting**: ESLint + Stylelint with Airbnb config
- **Type Checking**: TypeScript strict mode

## Key Files

- `.eleventy.js`: 11ty configuration, markdown plugins, layout/shortcode registration
- `scripts/rename-layouts.ts`: Renames compiled JS files for 11ty compatibility  
- `scripts/generate-bookshelf.ts`: Generates reading list from RSS feeds
- `scripts/find-and-copy-images.ts`: Copies referenced images to build directory

## Development Notes

### Adding New Components
1. Create folder in `src/components/[name]/`
2. Add TypeScript component file `[name].tsx`
3. Add CSS file `[name].css` 
4. Add test file `[name].test.tsx`
5. Component automatically available as 11ty shortcode

### Adding New Layouts  
1. Create folder in `src/layouts/[name]/`
2. Add TypeScript layout file `[name].tsx`
3. Add CSS file `[name].css`
4. Build system renames to `[name].11ty.js` for 11ty

### CSS Architecture
- All CSS files concatenated into single stylesheet
- PostCSS with autoprefixer, cssnano, css-variables, nested selectors
- No CSS-in-JS - separate .css files co-located with components

### Content Management
- Articles: Markdown with frontmatter in `src/articles/`
- Talks: Markdown with PDF attachments in `src/talks/`
- Jobs: Timeline entries in `src/jobs/`
- Bookshelf: Auto-generated from RSS feeds