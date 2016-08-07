var gulp = require('gulp') ;
var connect = require('gulp-connect') ;
var browserSync = require('browser-sync') ;
var sass = require('gulp-sass') ;

gulp.task('webserver', function() {
    browserSync.init({
        server: "."
    });
}) ;

gulp.task('reload' , function () {
    browserSync.reload('./index.html') ;
}) ;

gulp.task('styles', function() {
    console.log("Re-Compiling");
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task("watch" , function () {
    gulp.watch([
        "js/**/*.js" ,
        "sass/**/*.scss" ,
        "css/**/*.css" ,
        "templates/**/*.html"
    ] ,
     ['styles' , 'reload'])
});

gulp.task('default', ['webserver' , 'watch']);
