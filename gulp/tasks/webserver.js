'use strict';

var gulp = require('gulp');
var config = require('../config').webserver;
var connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        root: config.root,
        livereload: true
    });
});