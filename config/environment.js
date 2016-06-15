/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ecommerce',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyAQaVfObQCKEdYkKDc7YeKPNp_khxQMvI8",
      authDomain: "my-shop-4743d.firebaseapp.com",
      databaseURL: "https://my-shop-4743d.firebaseio.com",
      storageBucket: 'my-shop-4743d.appspot.com',
    },
    // firebase: {
    //   apiKey: "AIzaSyB_FzFosEHohab7weotC3lJc-A-Qa_KznQ",
    //   authDomain: "e-commerce-47a33.firebaseapp.com",
    //   databaseURL: "https://e-commerce-47a33.firebaseio.com",
    //   storageBucket: "e-commerce-47a33.appspot.com",
    // },
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

  if (environment === 'development') {
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

  if (environment === 'production') {

  }

  return ENV;
};
