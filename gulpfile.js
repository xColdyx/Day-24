'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync');

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});
gulp.task('server', function () {
    server.init({
        server: '.',
        notify: false
    });
gulp.watch('scss/*scss', gulp.series('css')).on('change', server.reload);
});