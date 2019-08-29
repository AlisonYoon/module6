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
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(sourcemap.write)
        .pipe(gulp.dest('.'))
    done()
})

gulp.task('sass:watch', function(done) {
    gulp.watch('scss.scss', gulp.series('compile'))    //gulp.series() is the list of tasks gulp can run
    done()
})