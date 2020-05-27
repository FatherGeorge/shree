var gulp = require('gulp'),
    path = require('../settings').path;

gulp.task('images', function () {
    return gulp.src(path.IMG + '/**/*.*')
        .pipe(gulp.dest(path.DEST_IMG));
});