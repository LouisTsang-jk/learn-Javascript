const { series, src, dest } = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const config = {
  
}

exports.default = function () {
  return src('file.js')
    .pipe(replace(/import (?!Vue|Router)(.+) from '(.+)'/g,`const $1 = ()=> import('$2');`))
    .pipe(rename({ extname: '.lazy.js' }))
    .pipe(dest('lazy/'));
}