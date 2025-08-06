# Social Media Image Generation

This site automatically generates social media preview images for all articles and talks, ensuring proper Open Graph and Twitter Card integration.

## How It Works

1. **Automatic Generation**: Social images are generated during the build process
2. **Meta Tags**: Proper Open Graph and Twitter Card meta tags are included in all pages
3. **Fallback Support**: Works with or without Puppeteer for maximum compatibility

## Setup

### Automatic (Recommended)
Social images are generated automatically during `yarn build`. If Puppeteer is installed, PNG images are created. Otherwise, HTML templates are generated for manual conversion.

### Install Puppeteer for Automatic PNG Generation
```bash
npm install puppeteer
```

### Manual Generation
```bash
yarn generate:social
```

## Generated Files

- **HTML Templates**: `temp/social-html/*.html` - Viewable templates for manual screenshot
- **PNG Images**: `dist/social/*.png` - Final social media images (if Puppeteer is available)

## Image Specifications

- **Size**: 1200×630 pixels (Facebook/Twitter recommended)
- **Format**: PNG with high DPI support
- **Content**: Title, description, type, and site branding
- **Style**: Modern gradient background with clean white card design

## Meta Tags Included

### Open Graph (Facebook/LinkedIn)
- `og:type`: website
- `og:url`: Full page URL
- `og:title`: Page title
- `og:description`: Page description
- `og:image`: Social image URL
- `og:image:width`: 1200
- `og:image:height`: 630
- `og:site_name`: csi.lk

### Twitter Cards
- `twitter:card`: summary_large_image
- `twitter:url`: Full page URL
- `twitter:title`: Page title
- `twitter:description`: Page description
- `twitter:image`: Social image URL
- `twitter:creator`: @csi
- `twitter:site`: @csi

## Testing Social Previews

Test your social media previews using these tools:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/

## Customization

### Image Design
Edit `scripts/generate-social-images-puppeteer.ts` to modify the HTML template and styling.

### Meta Tags
Edit `src/components/header/header.tsx` to modify the meta tags structure.

### Content Sources
The generator automatically processes:
- Articles from `src/articles/*.md`
- Talks from `src/talks/*.md`

Pages must have `title` and `permalink` in their frontmatter to generate social images.

## Troubleshooting

### No Images Generated
- Check that content files have required frontmatter (`title`, `permalink`)
- Verify the `dist/social/` directory is created during build
- Install Puppeteer for automatic PNG generation

### Social Previews Not Updating
- Clear social media caches using the testing tools above
- Ensure images are deployed to the correct URL path
- Check that meta tags are present in the page source

### Build Failures
- Social image generation is optional and won't break the build
- Check the build logs for specific error messages
- Ensure Node.js version meets requirements (>=17.0.1)