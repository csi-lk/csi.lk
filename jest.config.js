const ignore = ['src/_includes', 'visual.test.ts']

module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: ignore,
  testPathIgnorePatterns: ignore,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
}
