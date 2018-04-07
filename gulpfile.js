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
  gulp.watch('./_sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
