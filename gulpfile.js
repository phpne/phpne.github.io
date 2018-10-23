'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./_sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
  return gulp.watch('./_sass/**/*.scss', gulp.series('sass'));
});

gulp.task('build', gulp.series('sass'));

gulp.task('default', gulp.series('build', 'watch'));
