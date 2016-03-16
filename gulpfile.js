var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', ['connect'], function() {
  // place code for your default task here
});

gulp.task('connect', function() {
  connect.server();
});
