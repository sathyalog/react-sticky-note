'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var dest = 'prod/';

gulp.task('default', ['webserver']);

gulp.task('webserver', function() {
    gulp.src(dest)
    .pipe(webserver({
        livereload: true,
        open: true,
    }));
});
