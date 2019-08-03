var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
  browserSync.init({
    server: {
      baseDir: "app"
    }
  })
  watch('./app/index.html', function(){
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));
  watch('./app/assets/scripts/**/*.js', gulp.series('scriptsRefresh'));
});

gulp.task('cssInject', gulp.series('styles',function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
}));

gulp.task('scriptsRefresh', gulp.series('scripts',function(){
  browserSync.reload();
}));
