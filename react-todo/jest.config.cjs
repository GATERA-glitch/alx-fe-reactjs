// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true
        },
        target: 'es2020',
        transform: {
          react: {
            runtime: 'automatic'
          }
        }
      },
      module: { type: 'commonjs' }
    }]
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy'
  }
}
