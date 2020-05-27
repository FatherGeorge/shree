var gulp = require('gulp'),
    del = require('del'),
    path = require('../settings').path;

gulp.task('clean', function () {
    del(path.DEST);
});