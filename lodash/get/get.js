'use strict'
const object1 = { 'a': [{ 'b': { 'c': 3 } }] };
const object2 = { 'a': [{ 'b': { 'c': { 'abc': { 'd': 999 } } } }] };
const path1 = 'a[0].b.c';           // normal path
const path2 = ['a', '0', 'b', 'c']; // arr path
const path3 = ['a', '0', 'b', 'd']; // error arr path
const path4 = 'a[0].b.c["abc"].d';  // custom path

const result = get(object2, path4);
console.log(result);
function get(object, path) {
  if (object === undefined) {
    return undefined
  }
  let result;
  // path is array
  if (Array.isArray(path)) {
    result = cycleGetValue(object, path);
  }
  // path is not a path
  const paths = path.split(".");
  const regKeys = /(.+?)\[(.+?)\]/g;
  result = paths.map((item, index) => {
    const isInclude = regKeys.test(item);
    // lastIndex is change after (test or exec)
    regKeys.lastIndex = 0;
    if (isInclude) {
      const itemMatch = [...item.matchAll(regKeys)];
      return [itemMatch[0][1], itemMatch[0][2]];
    };
    return item;
  })
  // flat array
  result = cycleGetValue(object, result.flat());
  return result;
}

// path -> array
function cycleGetValue(object, path) {
  while (path.length > 0) {
    // quotes filter(remove quotes)
    let key = path[0];
    const regQuote = /(?:\"(.+?)\")|(?:\'(.+?)\')/;
    if (regQuote.test(key)) {
      key = key.replace(regQuote, '$1');
    }
    object = object[key];
    if (object === undefined) {
      return undefined;
    }
    path.shift();
  }
  return object;
}