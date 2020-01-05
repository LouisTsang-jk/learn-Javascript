'use strict'
const object = { 'a': [{ 'b': { 'c': 3 } }] };
const path1 = 'a[0].b.c';           // normal path
const path2 = ['a', '0', 'b', 'c']; // arr path
const path3 = ['a', '0', 'b', 'd']; // error arr path
const path4 = 'a[0].b.c["abc"].d';  // custom path
const result = get(object, path4);
// console.log(result);
function get(object, path) {
  if (object === undefined) {
    return undefined
  }
  let result = object;
  // path is array
  if (Array.isArray(path)) {
    let num = 0
    while (path.length > 0) {
      num++;
      result = result[path[0]];
      if (result === undefined) {
        return undefined;
      }
      path.shift();
    }
    return result;
  }
  // path is not a path
  const paths = path.split(".");
  const regKeys = /(.+?)\[(.+?)\]/g;
  console.log(paths);
  paths.forEach((item) => {
    if (regKeys.test(item)) {
      console.log(item);

    };
  })
}