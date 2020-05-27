var gulp = require('gulp');

gulp.task('dev:stylus', ['js:dev', 'pug', 'libs', 'images', 'font', 'stylus', 'browserSync', 'watch', 'watch:stylus']);