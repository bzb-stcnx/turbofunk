module.exports = function(config) {
  'use strict';
	config.set({
    basePath: '',

    // include browserify first
		frameworks: [ 'browserify', 'jasmine' ],

		browsers: ['Chrome'],

		files: [ 'test/unit/**/*.js' ],

		autoWatch: true,

    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

		plugins: [
      'karma-browserify',
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-spec-reporter', // output to terminal
			'karma-junit-reporter', // output to xml file
      'karma-jasmine-html-reporter'
		],

    preprocessors: {
      'test/unit/**/*.js': [ 'browserify' ]
    },

    browserify: { // https://github.com/nikku/karma-browserify#plugins
      debug: true,
      plugin: [
        ['tsify', {
            'project': '.'
          }
        ]
      ]
    },

    // 'progress' | 'dots' | 'html' | 'junit' | 'spec'
    reporters: ['spec', 'html', 'junit'],

		junitReporter: {
      outputDir: "test/reports",
			outputFile: undefined, // filename based on browser name
			suite: 'unit'
		}
	});
};
