/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// TODO: how to access the deploy environment? Currently I am passing an extra enviornment variable
var environment = process.env.environment;
if (environment === 'development') {
  var STATIC_URL = 'static/ember-app/';
} else if (environment === 'production') {
  var STATIC_URL = 'static/ember-app/';
} else {
  // We need an empty STATIC_URL when running ember serve
  var STATIC_URL = '';
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: true,
      prepend: STATIC_URL,
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
