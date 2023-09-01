/**
 *
 * aa
 *
 **/
module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/tests/**', '!**/src/environment/**', '!vite-env.d.ts'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/config/tests/setup.ts'],
  testPathIgnorePatterns: ['node_modules', 'coverage', 'build', 'tests'],
  testURL: 'http://localhost',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '@root/(.*)': '<rootDir>/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@containers/(.*)': '<rootDir>/src/containers/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@contexts/(.*)': '<rootDir>/src/contexts/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@environment/(.*)': '<rootDir>/src/environment/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/', '<rootDir>/node_modules/'],
};
