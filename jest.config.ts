import { pathsToModuleNameMapper } from 'ts-jest/utils';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper({
    '@app/*': [__dirname + '/src/*'],
    '@shared/*': [__dirname + '/shared/*'],
    '@server/*': [__dirname + '/server/*']
  })
};