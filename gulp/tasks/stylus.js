var gulp = require('gulp'),
    del = require('del'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    cssnano = require("cssnano"),
    stylus = require('gulp-stylus'),
    rupture = require('rupture'),
    jeet = require('jeet'),
    reload = require('browser-sync').reload,
    gcmq = require('gulp-group-css-media-queries'),
    settings = require('../settings');

var path = settings.path,
    autoprefixBrowser = settings.autoprefixer,
    stylusFiles = settings.styles,
    getSpriteData = require('../tools/sprite-data').getSpriteData;

gulp.task('sprite', function () {
    del(path.DEST_IMG + '/' + path.SPRITE_IMG_OUT);

    var spriteData = getSpriteData('stylus', 'sprite.styl');

    spriteData.css
        .pipe(gulp.dest(path.SPRITE_STYLES_STYLUS));
});

gulp.task('stylus', function () {
    return stylusFiles.forEach(function(obj){
        var processors = [
            autoprefixer({browsers: ['last 3 versions']})
        ];
        return gulp.src(path.STYLYS + obj)
            .pipe(stylus({
                errors: true,
                use: [rupture(),jeet()],
                'include css' : true
            }))
            .on('error', console.log)
            .pipe(gcmq())
            .pipe(postcss(processors))
            .pipe(gulp.dest(path.DEST_CSS));
    });
});

gulp.task('stylus:build', function () {
    return stylusFiles.forEach(function(obj){
        var processors = [
            autoprefixer({browsers: autoprefixBrowser}),
            cssnano()
        ];
        return gulp.src(path.STYLYS + obj)
            .pipe(stylus({
                errors: true,
                use: [rupture(),jeet()],
                'include css' : true
            }))
            .on('error', console.log)
            .pipe(gcmq())
            .pipe(postcss(processors))
            .pipe(gulp.dest(path.DEST_CSS));
    });
});

gulp.task('watch:stylus', function() {
    gulp.watch([
        path.STYLYS + '/**/*.{styl,css}'
    ], ['stylus', reload]);
});