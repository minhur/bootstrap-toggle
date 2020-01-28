const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);

function css_minify() {
	return src('./scss/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(dest('./css/'));
}

function js() {
	return src(['./js/bootstrap4-toggle.js'], { sourcemaps: true })
		.pipe(uglify())
		.pipe(concat('bootstrap4-toggle.min.js'))
		.pipe(dest('./js/', { sourcemaps: true }));
}

function watchFiles() {
  watch("./scss/**/*", css_minify);
	watch("./js/bootstrap4-toggle.js", js);
}

exports.js = js;
exports.css_minify = css_minify;
exports.watch = watch;
exports.default = parallel(css_minify, js, watchFiles);