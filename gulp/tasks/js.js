var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    path = require('../settings').path;

gulp.task('js:dev', function () {
    return gulp.src(path.JS)
        .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('js:build', function () {
    return gulp.src(path.JS)
        .pipe(uglify())
        .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('libs', function () {
    return gulp.src(path.LIB)
        .pipe(gulp.dest(path.DEST_LIB));
});
