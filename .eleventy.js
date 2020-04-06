const componentsDir = './src/_includes/components'
const Header = require(`${componentsDir}/header.js`)

module.exports = function (config) {
  config.addShortcode('Header', Header)
  config.setUseGitIgnore(false)
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
  }
}
