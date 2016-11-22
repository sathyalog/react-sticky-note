'use strict';

var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var webserver = require('gulp-webserver');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var dest = 'prod/';

gulp.task('default', ['webserver']);

gulp.task('webserver', function() {
    gulp.src(dest)
    .pipe(babel())
    .pipe(webserver({
        livereload: true,
        open: true,
    }));
});


// gulp.task("webserver", function () {
//   return gulp.src("prod/**/*.js")
//     .pipe(sourcemaps.init())
//     .pipe(babel())
//     .pipe(concat("all.js"))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("dest"))
//     .pipe(webserver({
//         livereload: true,
//         open: true,
//     }));
// });
