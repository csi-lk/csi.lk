const md = require('markdown-it')
const mdExternalLinks = require('markdown-it-external-links')
const componentsDir = './src/_includes/components'
const BigText = require(`${componentsDir}/big-text/big-text`)

module.exports = function (config) {
  const markdownLib = md({ html: true }).use(mdExternalLinks, {
    externalClassName: 'external',
    externalTarget: '_blank',
    externalRel: 'noopener',
    internalDomains: ['csi.lk', 'callumsilcock.com'],
  })

  config.setUseGitIgnore(false)
  config.addPairedShortcode('BigText', BigText.default)
  config.setLibrary('md', markdownLib)

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
  }
}
