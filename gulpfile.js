/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');

// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('js', function () {
    gulp.src(['app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('build-css', ['clean'], function() {
    return gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
});