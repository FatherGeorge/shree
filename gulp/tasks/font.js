var gulp = require('gulp'),
    path = require('../settings').path;

gulp.task('font', function () {
  return gulp.src(path.FONT)
      .pipe(gulp.dest(path.DEST_FONT));
});