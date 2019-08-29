var gulp = require('gulp')
var sass = require('gulp-sass')  // gulp-sass is a function
var sourcemap = require('gulp-sourcemaps')


sass.compiler = function('node-sass')

gulp.task('hello', function(done) {  //passing in a built-in function-how it's called doesn't matter- as a parameter
    console.log('howdy')
    done()
})

gulp.task('compile', function(done) {
    return gulp.src('scss.scss')   //gulp.src says "find this file"
        .pipe(sass())   // pipe() makes it each line goes synchronously
        .pipe(gulp.dest('.'))   // gulp.dest() -> where the output goes to. "." means where I am now.
    done()
})

gulp.task('compileAndDoSourceMaps', function (done) {
    return gulp.src('scss.scss')
        .pipe(sourcemap.init()) //sourcemap is an object. init() method sets up a clipboard.
        .pipe(sass())   // it compiles
        .pipe(sourcemap.write())  //creates the file(but it's not there yet) and put that sourcemap comment it
        .pipe(gulp.dest('.'))    //output that file in the destination
    done()
})

gulp.task('sass:watch', function(done) {
    gulp.watch(['scss.scss', '*.html'], gulp.series('compileAndDoSourceMaps'))    //gulp.series() is the list of tasks gulp can run
    //watch ['sass/*/*.scss', '*.html'] -> this watches all the sass files whether they are imported or not
    done()
})