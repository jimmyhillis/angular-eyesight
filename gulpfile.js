/**
 * Gulp (http://gulpjs.com) file used to run tasks.
 * After Gulp is installed, run "gulp" and angular-eyesight.js will be minified to angular-eyesight.min.js
 */
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('js', function() {
  gulp
    .src('angular-eyesight.js')
    .pipe(uglify())
    .pipe(rename('angular-eyesight.min.js'))
    .pipe(gulp.dest('.'));
});

function changeNotification(event) {
  console.log('File', event.path, 'was', event.type, ', running tasks...');
}

function watch() {
  gulp.watch('angular-eyesight.js', ['js']).on('change', changeNotification);
}

gulp.task('all', ['js']);
gulp.task('default', ['all'], watch);
