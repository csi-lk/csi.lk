# Pico.css Integration

## Decision

Adopted [Pico.css](https://picocss.com/) as the default styling layer for SilkOS with zero build steps.

## Rationale

- **Zero build**: No CSS preprocessors, bundlers, or build steps required
- **Semantic HTML**: Works with clean HTML5 elements without utility classes
- **Dark mode**: Automatic dark mode support via `prefers-color-scheme`
- **Lightweight**: ~10KB minified and gzipped
- **Modern**: Uses CSS variables for easy customization
- **Maintainable**: Minimal custom CSS needed on top

## Implementation

### CDN Loading

Pico.css is loaded via CDN (jsdelivr) in all templates:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
```

### Local Overrides

Custom SilkOS styling is defined in `pb_public/assets/silk.css` and loaded after Pico:

```html
<link rel="stylesheet" href="/assets/silk.css">
```

This allows us to:
- Define brand colors and tokens
- Override Pico defaults where needed
- Keep customizations minimal and focused

## Fallback Plan

### CDN Failure Scenario

If the CDN is unavailable:
1. Pages will still render functional HTML (unstyled but usable)
2. Content remains accessible and readable

### Offline/Local Hosting Option

For production resilience, download Pico.css locally:

```bash
# Download Pico.css to vendor directory
mkdir -p pb_public/vendor
curl -o pb_public/vendor/pico.min.css https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css
```

Update templates to use local version:

```html
<link rel="stylesheet" href="/vendor/pico.min.css">
```

## Dark Mode

Pico.css automatically detects and applies dark mode based on `prefers-color-scheme: dark`.

No JavaScript toggle required - respects OS/browser preference.

Test dark mode:
- DevTools > Rendering > Emulate prefers-color-scheme: dark

## Customization

See `pb_public/assets/silk.css` for current overrides:
- Brand colors (`--silk-primary`)
- Spacing adjustments
- Custom utility classes for SilkOS-specific layouts

## Non-Goals

- No Tailwind or utility-first CSS
- No component libraries beyond Pico defaults
- No build tools or CSS preprocessing
- No redesign of existing layouts (just "looks decent by default")
