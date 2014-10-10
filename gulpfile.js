var gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
  cover = require('gulp-coverage');

gulp.task('default', function(){
  "use strict";

});

gulp.task('test', function() {
  "use strict";
  return gulp.src('test/*.js')
    .pipe(cover.instrument({
      pattern: ['src/*.js']
    }))
    .pipe(jasmine())
    .pipe(cover.gather())
    .pipe(cover.enforce({
      statements: 100,
      blocks: 100,
      lines: 100
    }))
    .pipe(cover.report({
        outFile: 'coverage.html'
    }));
    //.pipe(cover.format([ 'html']))
    //.pipe(gulp.dest('coverage'));
});
