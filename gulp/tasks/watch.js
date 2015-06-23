'use strict';

var gulp = require('gulp');

var task = function () {
    gulp.watch('src/client/**/*.js', ['scripts', 'notify']);
    gulp.watch('src/client/css/**.less', ['less']);
    gulp.watch('src/client/*.html', ['copy', 'notify']);
    // gulp.watch('app/assets/**', ['assets']);
};

gulp.task('watch', task);

module.exports = task;