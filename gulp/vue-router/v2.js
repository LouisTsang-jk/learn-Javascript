// FIXME
const { parallel, src, dest } = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');


const config = {
  type: 'toLazy',
  inputFiles: ['file.js'],
  outputPath: '/lazy'
}

const generator = function ({ type = 'toLazy', inputFiles, outputPath = 'lazy/' }) {
  const regType = {
    toLazy: /import (?!Vue|Router)(.+) from '(.+)'/g,
    toDefault: /const (.+) = \(\)=> import\((.+)\)/g
  }[type];
  const replacementType = {
    toLazy: `const $1 = ()=> import('$2');`,
    toDefault: `` // TODO 
  }[type];
  return function () {
    const result = [];
    while (inputFiles.length) {
      result.push(
        src('file.js')
          .pipe(replace(regType,replacementType))
          .pipe(rename({ extname: '.lazy.js' }))
          .pipe(dest(outputPath))
      );
    }
    return result;
  }
}

const taskQueue = generator(config);
exports.default = parallel(taskQueue.pop());