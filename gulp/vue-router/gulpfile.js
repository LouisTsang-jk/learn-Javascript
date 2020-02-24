// FIXME
const { parallel, src, dest } = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const generator = function ({ type = 'toLazy', inputFile, outputPath = 'lazy/' }) {
  const regType = {
    toLazy: /import (?!Vue|Router)(.+) from '(.+)'/g,
    toDefault: /const (.+) = \(\)=> import\((.+)\)/g
  }[type];
  const replacementType = {
    toLazy: `const $1 = ()=> import('$2');`,
    toDefault: `` // TODO 
  }[type];
  return function () {
    return src(inputFile)
      .pipe(replace(regType, replacementType))
      .pipe(rename({ extname: '.lazy.js' }))
      .pipe(dest(outputPath));
  }
}

const config = {
  type: 'toLazy',
  inputFile: 'file.js',
  outputPath: 'lazy/'
}

const taskQueue1 = generator({
  type: 'toLazy',
  inputFile: 'file1.js',
  outputPath: 'lazy/'
});
const taskQueue2 = generator({
  type: 'toLazy',
  inputFile: 'file2.js',
  outputPath: 'lazy/'
});
exports.default = parallel(taskQueue1, taskQueue2);