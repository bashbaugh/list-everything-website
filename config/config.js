const _ = require('lodash');

const config = require('./config.json');
const credentials = require('./credentials.json');
const defaultConfig = config.development;
const credConfig = credentials;
const environment = process.env.NODE_ENV || 'development';
const envConfig = config[environment];
const finalConfig = _.merge(defaultConfig, credConfig, envConfig);

global.gConfig = finalConfig;
