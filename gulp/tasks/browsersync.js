var gulp = require('gulp'),
    browserSync = require('browser-sync'),
	gutil = require('gulp-util'),
    settings = require('../settings');

var path = settings.path,
    httpPort = settings.httpPort;

gulp.task('browserSync', function(){
	browserSync({
		files: [
            path.DEST + '/**/*.js',
            path.DEST + '/**/*.html',
            path.DEST + '/**/*.css'
        ],
		open: !!gutil.env.open,
		port: gutil.env.port || httpPort,
		server: {
			baseDir: [
				path.DEST
			],
			directory: false
		}
	})
});