const gulp = require('gulp');
const { src, watch, series, dest, parallel } = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();



// Functions

// clean dist
function clear() {
    return gulp.src('dist/*', {
        read: false
    })
        .pipe(clean())
}

// Compile scss into css file
function compileScss() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
}

// copyHtml file into dist file
function copyHtml() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
}

// Minified image
function imageMinify() {
    return gulp.src('src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
}

// Concating Js
function concatJs(){
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
}

// Watch Files
function watchFiles() {
    watch('src/scss/*', compileScss);
    watch('src/*.html', copyHtml);
    watch('src/image/*', imageMinify);
    watch('src/js/*', concatJs);
}

// // Browser Sync
// function browserSync() {
//     browserSync.init({
//         server: 'dist/',
//         port: 8080
//     })
// }

exports.watch = parallel(watchFiles);
exports.default = series(clear, parallel(compileScss, copyHtml, imageMinify, concatJs));

// exports.build = series(clean, parallel(compileScss, copyHtml, imageMinify, concatJs));


// exports.compileScss = compileScss;
// exports.copyHtml = copyHtml;
// exports.imageMinify = imageMinify;
// exports.concatJs = concatJs;