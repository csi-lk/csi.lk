module.exports = wallaby => ({
  files: [
    'src/*/**/*.js',
    { pattern: 'src/*/**/*.spec.js.snap', instrument: false },
    '!src/*/**/*.spec.js',
    '!src/cms/cms*.js',
    { pattern: 'package.json', instrument: false },
  ],
  tests: [
    'src/**/*.spec.js',
  ],
  testFramework: 'jest',
  compilers: {
    '**/*.js*': wallaby.compilers.babel(),
  },
  env: {
    type: 'node',
    runner: 'node',
  },
  reportConsoleErrorAsError: true,
  reportUnhandledPromises: true,
  setup(w) {
    const jestConfig = require('./package.json').jest // eslint-disable-line
    w.testFramework.configure(jestConfig)
  },
})
