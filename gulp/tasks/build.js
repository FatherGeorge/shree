var gulp = require('gulp');

gulp.task('build:stylus', ['js:build', 'pug:build', 'libs', 'images', 'font', 'stylus:build']);