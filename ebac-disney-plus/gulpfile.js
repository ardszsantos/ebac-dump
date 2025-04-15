const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const uglify = require('gulp-uglify');



function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}


function styles() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
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


exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}

