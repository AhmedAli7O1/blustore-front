'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var src = {
    sass: 'client/sass/blustore-styles.scss',
    sassAll: 'client/sass/**/*.scss',
    sassFolder: 'client/sass'
};

gulp.task('sass', function () {
    return gulp.src(src.sass)
        .pipe(sass.sync({ outputStyle: 'expanded', includePaths: [src.sassFolder] }).on('error', sass.logError))
        .pipe(gulp.dest('./client/styles'));
});

gulp.task('sass:watch', function () {
    return gulp.watch(src.sassAll, ['sass']);
});