const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');


function styles() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/css"));
}


function images() {
    return gulp.src("./src/images/**/*", {encoding: false})
        .pipe(imagemin([
            mozjpeg({ quality: 80 }), // Keep quality decent
            pngquant({ quality: [0.6, 0.8] }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("./dist/images"));
}

function fonts() {
    return gulp.src("./src/assets/fonts/**/*") // Path to your source fonts
        .pipe(gulp.dest("./dist/assets/fonts")); // Output directory
}


exports.default = gulp.parallel(styles, images, fonts);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
}

