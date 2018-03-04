var gulp = require('gulp');
var watch = require('gulp-watch');
var pug = require('gulp-pug');
var gulp_watch_pug = require('gulp-watch-pug');


var watchSrc = function() {
	gulp.src('pug/**/*.pug')
		.pipe(watch('pug/**/*.pug'))
		.pipe(gulp_watch_pug('pug/**/*.pug', {
			delay: 100
		}))
		.pipe(pug())
		.pipe(gulp.dest('output/'));
}

// tasks
gulp.task('default', watchSrc);
gulp.task('watch', watchSrc);