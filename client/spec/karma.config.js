// karma.conf.js
const _ = require('lodash');
const webpackConfig = require('..//webpack.config.js');

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'spec/**/*Spec.js'
        ],
        basePath: '../',
        clinet: {
            jasmine: {}
        },
        webpack: _.omit(webpackConfig, 'entry'),
        preprocessors: {
            'spec/**/*Spec.js': ['webpack']
        },
        browsers: ['PhantomJS'],
        singleRun: true
    })
}