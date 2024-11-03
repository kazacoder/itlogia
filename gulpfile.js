'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

function defaultTask(done) {
    gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("style.css"))
        .pipe(clean())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
    // place code for your default task here
    console.log(123)
    done();
}


gulp.task('default', defaultTask);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.series('default'));
};

// exports.default = defaultTask


