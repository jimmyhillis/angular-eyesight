/**
 * Gulp build
 *
 * Default build for development will watch and minify each change
 * of angular-eyesight.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    gulp.src('angular-eyesight.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['js'], function () {
    gulp.watch('angular-eyesight.js', ['js']);
});
