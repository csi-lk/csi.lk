const variables = require('./src/styles/variables')

module.exports = {
  plugins: {
    // 'postcss-media-variables': true,
    'postcss-nested': true,
    'postcss-css-variables': {
      variables,
    },
    'postcss-calc': true,
    // 'postcss-media-variables': true,
    'postcss-nested-ancestors': true,
    autoprefixer: true,
    cssnano: {
      preset: 'default',
    },
  },
}
