// default -> lazy routes & lazy routes -> default
const {parallel, src, dest} = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

/**
 * Generator transform function
 * Factory pattern
 * @params {String} type (toLazy|toDefault)
 * @params {String} inputFile - inputPath
 * @params {String} outputPath - outputPath
*/
const generator = function ({type = 'toLazy', inputFile, outputPath = 'lazy/'}) {
    const regType = {
        toLazy: /import (?!Vue|Router)(.+) from '(.+)'/g,
        toDefault: /const (.+) = \(\)=> import\((.+)\)/g
    }[type];
    const replacementType = {
        toLazy: `const $1 = ()=> import('$2');`,
        toDefault: `import $1 from $2`
    }[type];
    return function () {
        return src(inputFile)
            .pipe(replace(regType, replacementType))
            .pipe(rename({extname: type === 'toLazy' ? '.lazy.js' : '.default.js'}))
            .pipe(dest(outputPath));
    }
};

const taskQueue1 = generator({
    type: 'toLazy',
    inputFile: 'src/entry/app_router.js',
    outputPath: 'src/entry/'
});
const taskQueue2 = generator({
    type: 'toLazy',
    inputFile: 'src/entry/pc_router.js',
    outputPath: 'src/entry/'
});

const taskQueue3 = generator({
    type: 'toDefault',
    inputFile: 'src/entry/app_router.js',
    outputPath: 'src/entry/'
});

const taskQueue4 = generator({
    type: 'toDefault',
    inputFile: 'src/entry/pc_router.js',
    outputPath: 'src/entry/'
});

// build
exports.default = parallel(taskQueue1, taskQueue2, taskQueue3, taskQueue4);