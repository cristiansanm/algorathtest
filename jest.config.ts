const jestConfig = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)',
  ],

  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@modules/(.*)': '<rootDir>/src/modules/$1',
    '^@router/(.*)': '<rootDir>/src/router/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@resources/(.*)': '<rootDir>/src/resources/$1',
  },
  testEnvironment: 'node',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
};

export default jestConfig;
