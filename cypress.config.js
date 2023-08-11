const { defineConfig } = require('cypress');
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  // https://docs.cypress.io/guides/references/configuration#Timeouts
  pageLoadTimeout: 10000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  env: {
    viewports: [[1080, 1920]],
    headersBlocklist: [],
  },
  numTestsKeptInMemory: 5,
  blockHosts: [],
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'local';
      return getConfigurationByFile(file);
    },
    specPattern: 'cypress/e2e/**/*.js',
  },
});
