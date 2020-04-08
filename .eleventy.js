const componentsDir = './src/_includes/components'
const BigText = require(`${componentsDir}/big-text/big-text`)

module.exports = function (config) {
  config.setUseGitIgnore(false)
  config.addPairedShortcode('BigText', BigText.default)
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
  }
}
