
var gulp = require('gulp');
var mincss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('min_css', async function() {

    return gulp.src('src/css/*')
                .pipe(mincss())
                .pipe(gulp.dest('dist/css'));

});

gulp.task('img', async function() {

    return gulp.src('src/img/*')
                .pipe(imagemin())
                .pipe(gulp.dest('dist/img'));

});

gulp.task('watch', async function() {
    gulp.watch('src/css', gulp.parallel('min_css'));
    gulp.watch('src/img', gulp.parallel('img'));
});

gulp.task('uglify_js', function() {
    return gulp.src('src/js/*')
                .pipe(uglify())
                .pipe(gulp.dest('dist/js'));
});

gulp.task('concat_js', async function() {
    return gulp.src('src/js/*')
                .pipe(concat('all.js'))
                .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.parallel('min_css', 'img', 'watch', 'concat_js', 'uglify_js'));