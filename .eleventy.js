const fs = require('fs')
const md = require('markdown-it')
const mdExternalLinks = require('markdown-it-external-links')

const componentsDir = './src/_includes/components'
const toPascalCase = s => s.replace(/(^\w|-\w)/g, t => t.replace(/-/, '').toUpperCase())

module.exports = function (config) {
  // Markdown plugins
  const markdownLib = md({ html: true }).use(mdExternalLinks, {
    externalClassName: 'external',
    externalTarget: '_blank',
    externalRel: 'noopener',
    internalDomains: ['csi.lk', 'callumsilcock.com'],
  })
  config.setLibrary('md', markdownLib)

  // Use custom ignore
  config.setUseGitIgnore(false)

  // Add all components as {% shortcodes %}
  fs.readdirSync(componentsDir).forEach(folder => {
    config.addPairedShortcode(
      toPascalCase(folder),
      require(`${componentsDir}/${folder}/${folder}.js`).default,
    )
  })

  // Config
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
  }
}
