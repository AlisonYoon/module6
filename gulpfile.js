var gulp = require('gulp')

gulp.task('hello', function(done) {  //passing in a built-in function-how it's called doesn't matter- as a parameter
    console.log('howdy')
    done()
})