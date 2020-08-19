/* eslint-disable import/no-extraneous-dependencies */
const browserify = require("@cypress/browserify-preprocessor");
const watchApp = require("cypress-app-watcher-preprocessor");
const { execSync } = require("child_process");

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.transform[1][1].babelrc = true;
  require('cypress-react-unit-test/plugins/react-scripts')(on, config)

  on("file:preprocessor", watchApp(browserify(options)));
  on("task", {
    "defaults:db": () => {
      execSync("cd ../ && npm run createDefaultDB");
      return null;
    }
  });

  return config;
};
