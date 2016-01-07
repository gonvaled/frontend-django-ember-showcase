/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  // See here: http://discuss.emberjs.com/t/access-env-at-build-time-as-opposed-to-runtime/9391/10?u=gonvaled
  var config = defaults.project.config(process.env.EMBER_ENV || 'development');
  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: config.environment === 'dev-django' || config.environment === 'production',
      prepend: config.STATIC_URL,
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
