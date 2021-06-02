const ignore = ['node_modules', 'src/_includes']

module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: ignore,
  testPathIgnorePatterns: ignore,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
}
