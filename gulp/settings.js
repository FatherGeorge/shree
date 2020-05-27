module.exports = {
    httpPort: 30001,
    path: {
        PUG: 'src/pug',
        JS: 'src/js/*.js',
        LIB: 'src/lib/**/*.*',
        STYLYS: 'src/stylus/',
        IMG: 'src/img',
        FONT: 'src/fonts/**/*.*',
        SPRITE_IMG_SRC: 'src/sprite',
        SPRITE_IMG_OUT: 'sprite.png',
        SPRITE_STYLES_STYLUS: 'src/stylus/icons',
        SPRITE_STYLES_CSS_PATH: '../img/',
        DEST_SPRITE_IMG: 'src/img',
        OUT_JS: 'main.js',
        OUT_CSS: 'main.css',
        DEST: 'dist',
        DEST_JS: 'dist/js',
        DEST_CSS: 'dist/css',
        DEST_LIB: 'dist/js/lib',
        DEST_IMG: 'dist/img',
        DEST_FONT: 'dist/fonts'
    },
    autoprefixer: ['> 1%'],
    styles: [
        'main.styl'
    ]
};
