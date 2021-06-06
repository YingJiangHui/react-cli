const defaultConfig = require("@snowpack/app-scripts-react/jest.config.js")
const config = {
  ...defaultConfig(),
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1"
  }
};
module.exports= config
