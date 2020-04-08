const variables = require('./src/styles/variables')

module.exports = {
  plugins: {
    'postcss-nested': true,
    'postcss-css-variables': {
      variables,
    },
    'postcss-calc': true,
    'postcss-nested-ancestors': true,
    ...(process.env.NODE_ENV !== 'development'
      ? {
          autoprefixer: true,
          cssnano: {
            preset: 'default',
          },
        }
      : {}),
  },
}
