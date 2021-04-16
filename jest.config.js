/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['rootDir>/src/*.ts'],
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
