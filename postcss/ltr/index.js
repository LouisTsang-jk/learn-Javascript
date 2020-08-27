// index.js
const postcss = require('postcss');
const process = require('process');
const fs = require('fs').promises;
// loader main code
const ltrAutoFill = require('./ltr');
(async function () {
  try {
    const cssFile = await fs.readFile('./src/index.css')
    postcss([
      (ltrAutoFill)(),
      (require('autoprefixer')({
        overrideBrowserslist: [
          "> 1%",
          "ios >= 7",
          "android >= 4.0"
        ]
      }))
    ])
    .process(cssFile, { from: './src/index.css', to: './dist/index.css' })
    .then(result => {
      fs.writeFile('./dist/index.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('./dist/css.map', result.map, () => true)
      }
    })
  } catch (err) {
    console.warn('err:', err);
  }
})()