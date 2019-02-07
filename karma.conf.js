module.exports = function(config) {
    config.set({
        browsers: ['Firefox'],
        files: ['test/*.js'],
        frameworks: ['browserify', 'mocha'],
        plugins: [
            'karma-browserify',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-junit-reporter',
            'karma-firefox-launcher',
            'karma-safari-launcher'
        ],
        preprocessors: {
            'test/*.js': ['browserify']
        },
        reporters: ['mocha', 'junit'],
        junitReporter: {
            outputFile: 'browser-test-results.xml'
        },
        singleRun: true,

        browserify: {
            debug: true,
            transform: ['babelify']
        },

        client: {
            mocha: {
                grep: '@nodeonly',
                invert: true
            }
        }
    });
};
