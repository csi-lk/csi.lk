const fs = require('fs')
const md = require('markdown-it')
const mdExternalLinks = require('markdown-it-external-links')
const mdHighlightJs = require('markdown-it-highlightjs')

const componentsDir = './src/_includes/components'
const layoutsDir = './src/_includes/layouts'

const toPascalCase = s => s.replace(/(^\w|-\w)/g, t => t.replace(/-/, '').toUpperCase())

module.exports = function (config) {
  // Markdown plugins
  const markdownLib = md({ html: true })
    .use(mdExternalLinks, {
      externalClassName: 'external',
      externalTarget: '_blank',
      externalRel: 'noopener noreferrer',
      internalDomains: ['csi.lk', 'callumsilcock.com'],
    })
    .use(mdHighlightJs)
  config.setLibrary('md', markdownLib)

  // Use custom ignore
  config.setUseGitIgnore(false)

  // Add all layouts
  fs.readdirSync(layoutsDir).forEach(folder => {
    config.addLayoutAlias(folder, `layouts/${folder}/${folder}.11ty.js`)
  })

  // Add all components as {% shortcodes %}
  fs.readdirSync(componentsDir).forEach(folder => {
    config.addPairedShortcode(toPascalCase(folder), children =>
      require(`${componentsDir}/${folder}/${folder}.js`).default(null, children),
    )
  })

  // Config
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml', 'txt', 'svg', 'ico'],
    htmlTemplateEngine: 'njk',
  }
}
