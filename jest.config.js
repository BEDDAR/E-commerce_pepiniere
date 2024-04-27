module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["**/__tests__/**/*.test.js", "**/?(*.)+(spec|test).js"],
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  jest: {
    "moduleFileExtensions": [
      "js",
      "json",
      // tell Jest to handle `*.vue` files
      "vue"
    ],
    "transform": {
      // process `*.vue` files with `vue-jest`
      ".*\\.(vue)$": "vue-jest",
      '^.+\\.js$': 'babel-jest',
    }
  },
  setupFiles: ['<rootDir>/test-setup.js'],
  testPathIgnorePatterns: ["/node_modules/"],
}
