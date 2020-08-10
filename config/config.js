const _ = require('lodash');

const config = require('./config.json');
let credConfig;
try {
  const credentials = require('./credentials.json');
  credConfig = credentials;
} catch {
  credConfig = {};
}
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const envConfig = config[environment];
const finalConfig = _.merge(defaultConfig, credConfig, envConfig);

global.gConfig = finalConfig;
