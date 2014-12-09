;(function() {
    'use strict';

    var gulp = require('gulp'),
        fs = require('fs'),
        path = require('path'),
        url = require('url'),
        browserSync = require('browser-sync');

    // The default file if the file/path is not found
    var defaultFile = 'index.html'

    // I had to resolve to the previous folder, because this task lives inside a ./tasks folder
    // If that's not your case, just use `__dirname`
    var folder = path.resolve(__dirname, '../');

    gulp.task('serve', ['watch'], function() {
        browserSync({
            server: {
                baseDir: './',
                middleware: function(req, res, next) {
                    var fileName = url.parse(req.url);
                    fileName = fileName.href.split(fileName.search).join('');
                    var fileExists = fs.existsSync(folder + fileName);
                    if (!fileExists && fileName.indexOf('browser-sync-client') < 0) {
                        req.url = '/' + defaultFile;
                    }
                    return next();
                }
            },

            files: [
                'index.html',
                'javascript/**/*.html',
                'styleheets/**/*.css',
                'javascript/**/*.js'
            ],
            browser: ['google chrome']
        });
    });

}());
