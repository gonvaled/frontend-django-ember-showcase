/* jshint node: true */

module.exports = function(environment) {

  // I define an extra environment target:
  // - development: normal development with ember-serve
  // - dev-django: development Ember SPA embedded in django app
  // - production: production Ember SPA embedded in django app

  var ENV = {
    modulePrefix: 'frontend-django-ember-showcase',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development' || environment === 'dev-django') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'development') {
    // We need an empty STATIC_URL when running ember serve
    var STATIC_URL = '';
  } else if (environment === 'dev-django') {
    var STATIC_URL = 'static/ember-app/';
  } else if (environment === 'production') {
    var STATIC_URL = 'static/ember-app/';
  }

  ENV.STATIC_URL = STATIC_URL;

  return ENV;
};
