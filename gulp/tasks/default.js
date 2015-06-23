'use strict';

var gulp = require('gulp');

gulp.task('build', ['clean'], function () {
    return gulp.start('scripts', 'less', 'copy');
});

gulp.task('default', ['build', 'webserver', 'watch']);

