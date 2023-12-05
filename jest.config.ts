import { pathsToModuleNameMapper } from 'ts-jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  moduleNameMapper: pathsToModuleNameMapper({
    '@app/*': [__dirname + '/src/*'],
    '@shared/*': [__dirname + '/shared/*'],
    '@server/*': [__dirname + '/server/*'],
  }),
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
