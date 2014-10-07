var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('build', ['js', 'css']);

gulp.task('watch', function () {
   gulp.watch('src/**/*', ['build']);
});

gulp.task('js', function() {
  gulp.src(['src/js/*.js'])
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('css', function() {
  gulp.src(['src/css/*.css'])
    // .pipe(uglify())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./'));
});