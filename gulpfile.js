'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');

//Minify images(runs on 2nd gulp command- after resize(task on top))
gulp.task('minify', () => {
  gulp.src('./src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/images'));
});


// Sass
gulp.task('sass', () => {
  gulp.src('./src/stylesheet/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/stylesheet/css'));
});


// Minify CSS
gulp.task('styles', () => {
  gulp.src('./src/stylesheet/css/*.css')
    .pipe(plumber())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/stylesheet'));
});


// Concat and Minify aka Uglify JS
gulp.task('scripts', () => {
  gulp.src('./src/script/*.js')
      .pipe(plumber())
      .pipe(uglify())
      .pipe(gulp.dest('./dist/script'));
});


// Minify HTML
gulp.task('index', function(){
  gulp.src('./src/index.html')
      .pipe(plumber())
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./'));
});


// Watch files- ^C to exit from watch
gulp.task('watch', () => {
  gulp.watch('./src/stylesheet/scss/*.scss', ['sass']);
  gulp.watch('./src/stylesheet/css/*.css', ['styles']);
  gulp.watch('./src/script/*.js', ['scripts']);
  gulp.watch('./src/index.html', ['index']);
});


// Allow 'gulp' in terminal to perform all the task listed
gulp.task('default', [ 'sass', 'watch', 'minify', 'styles', 'scripts', 'index']);
