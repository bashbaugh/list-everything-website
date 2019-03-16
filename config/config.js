const _ = require('lodash');

const config = require('./config.json');
const credentials = require('./credentials.json');
const defaultConfig = config.development;
const credConfig = credentials.development
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, credConfig, environmentConfig);

global.gConfig = finalConfig;
