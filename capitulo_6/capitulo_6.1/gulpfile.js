var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    minifycss   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    livereload  = require('gulp-livereload');

var css = {
  source: 'src/stylesheets',
  target: 'public/stylesheets'
};
var js = {
  source: 'src/javascripts',
  target: 'public/javascripts'
};

gulp.task('css', function () {
  gulp.src([
    css.source + '/normaset.css',
    css.source + '/*.css'
  ])
  .pipe(concat('all.min.css'))
  .pipe(minifycss({keepSpecialComments: false}))
  .pipe(gulp.dest(css.target))
  .pipe(livereload());
});

gulp.task('js', function() {
  gulp.src([
    js.source + '/*.js'
  ])
  .pipe(concat('all.min.js'))
  .pipe(uglify({mangle: true}).on('error', console.error))
  .pipe(gulp.dest(js.target))
  .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(css.source + '/*.css', ['css']);
  gulp.watch(js.source + '/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);
