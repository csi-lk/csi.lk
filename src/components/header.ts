import { html } from 'common-tags'
import { Eleventy } from '../types/global'

export = function Header({
  siteData: { meta, title: siteTitle, description: siteDescription },
  title,
  description,
}: Eleventy.Page): string {
  const metaTags = meta.map(
    tag => `<meta ${Object.keys(tag).map(key => `${key}="${tag[key]}"`)} />`,
  )
  return html`<!DOCTYPE html>
    <html lang="en" class="no-js">
      <head>
        ${metaTags}
        <meta name="description" content="${description || siteDescription}" />
        <title>${title || siteTitle}</title>
        <link rel="stylesheet" href="/styles/index.css" />
      </head>
      <body></body>
    </html> `
}
