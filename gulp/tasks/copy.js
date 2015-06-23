'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');


var copyTask = function () {
    return gulp.src('./src/client/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(notify('Done with html'));

};



gulp.task('copy', copyTask);

module.exports = copyTask;