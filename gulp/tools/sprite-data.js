var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    path = require('../settings').path;

function getSpriteData(styleType, outputFile){
    var spriteData = gulp.src(path.SPRITE_IMG_SRC + '/**/*.png', { read: false })
        .pipe(spritesmith({
            imgName: path.SPRITE_IMG_OUT,
            cssName: outputFile,
            imgPath: path.SPRITE_STYLES_CSS_PATH + path.SPRITE_IMG_OUT,
            cssFormat: styleType,
            algorithm: 'binary-tree',
            padding: 10,
            imgOpts: {},
            format: 'png'
        }));

    spriteData.img.pipe(gulp.dest(path.DEST_SPRITE_IMG));

    return spriteData;
}

exports.getSpriteData = getSpriteData;
