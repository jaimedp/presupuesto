'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');

var task = function () {
    notify('Done');
};

gulp.task('notify', task);

module.exports = task;