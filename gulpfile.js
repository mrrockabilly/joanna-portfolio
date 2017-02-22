var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var imageResize = require('gulp-image-resize');

gulp.task('minify', function () {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('compr-img', () =>
  gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('minify-css', function () {
  return gulp.src('*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('resize', function () {
  gulp.src('images/*')
    .pipe(imageResize({
      width : 1500,
      upscale : false
    }))
    .pipe(gulp.dest('dist/cropped'));
});

gulp.task('default', function () {
  gulp.run('minify', 'compr-img', 'minify-css');

  gulp.watch('*.css', function (event) {
    gulp.run('minify-css');
  })
  gulp.watch('*.html', function (event) {
    gulp.run('minify');
  })
  gulp.watch('images/*', function (event) {
    gulp.run('compr-img');
  })
})