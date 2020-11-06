const Good = require('good');

const ConfigServer = require('./server');
const routes = require('./../api');

const goodOptions = {
  includes: {
    request: ['payload'],
    response: ['payload']
  },
  reporters: {
    consoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        log: '*',
        error: '*',
        response: '*',
        request: '*'
      }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

let plugins = {
  server: {
    port: ConfigServer.port,
    host: ConfigServer.host,
    routes: {
      cors: true
    }
  },
  register: {
    plugins: [
      {
        plugin: 'blipp',
        options: { showAuth: true }
      },
      {
        plugin: 'hapi-auth-jwt2'
      },
      {
        plugin: require('./../plugins/auth')
      },
      {
        plugin: routes
      },
      {
        plugin: Good,
        options: goodOptions
      }
    ]
  }
};

module.exports = plugins;
