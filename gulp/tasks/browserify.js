'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var path = require('path');
var notify = require('gulp-notify');

var config = require('../config');

var browserifyTask = function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: config.browserify.entries,
    debug: true
  });

  return b.bundle()
    .on('error', function (err) {
        console.log('error', err);
        this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.join(config.distFolder, 'js')))
    .pipe(notify('Done with scripts'));
};


gulp.task('browserify', function() {
    return browserifyTask();
});

module.exports = browserifyTask;
