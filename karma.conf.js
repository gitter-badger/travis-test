// Karma configuration
// Generated on Tue Oct 08 2013 14:36:57 GMT+0200 (Paris, Madrid (heure d’été))

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './',

        // frameworks to use
        frameworks: ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            // 'node_modules/sinon/pkg/sinon.js',
            //'public/bundle/vendor.js',
            //'public/bundle/bundle.js',
            //'test/browser/*-test.js'
            'api.js',
            'test/browser/*.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocessors
        preprocessors: {
            './api.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage'],

        // coverage report
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Firefox'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        proxies: {
            //'/images': 'http://localhost:5000'
        },

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};