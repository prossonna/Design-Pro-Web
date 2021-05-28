const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Functions

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




exports.compileScss = compileScss;
exports.copyHtml = copyHtml;