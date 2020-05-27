var gulp = require('gulp'),
    pug = require('gulp-pug'),
    minifyHtml = require('gulp-htmlmin'),
    path = require('../settings').path;

gulp.task('pug', function() {
    return gulp.src(path.PUG + '/pages/**/*.{pug,jade}')
        .pipe(pug({
            pretty: true
        }))
        .on('error', console.log)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('pug:build', ['pug'], function () {
    return gulp.src(path.DEST + '/*.html')
        .pipe(minifyHtml({
            removeEmptyAttributes: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(path.DEST));
});