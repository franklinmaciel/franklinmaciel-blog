var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function() {

	var task = gulp.task('sass', function () {
	  return gulp.src('./src/sass/**/raio.sass')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('./src/css/'));
	});

	return task;
}