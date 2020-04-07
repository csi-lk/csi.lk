const componentsDir = './src/_includes/components'

module.exports = function (config) {
  config.setUseGitIgnore(false)
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
  }
}
