var gulp = require('gulp'),
    reload = require('browser-sync').reload,
    path = require('../settings').path;

gulp.task('watch', function() {
	global.watch = true;

    gulp.watch([
        path.JS
    ], ['js:dev', reload]);

    gulp.watch([
        path.PUG + '/**/*.{pug,jade}'
    ], ['pug', reload]);
});