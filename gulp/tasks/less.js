'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var less = require('gulp-less');
var config = require('../config').less;

gulp.task('less', function() {
   gulp.src(config.src)
      .pipe(less())
      .pipe(gulp.dest(config.dest))
      .pipe(notify('Done with less'));
});