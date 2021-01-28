// 冒泡算法
function random (min = 0, max = 999) {
  return Math.round(Math.random() * (max - min) + min);
}
let arr = new Array(random(5,15)).fill(0);
arr = arr.map(e => {
  return random();
});
console.log('arr', arr);
function bubble (arr) {
  return arr.reduce((acc, cur) => {
    return acc[acc.length ? acc.length - 1 : 0] > cur ? [...acc, cur] : [cur, ...acc];
  }, []);
}
function swap ([a, b]) {
  return [b, a];
}
const format = bubble(arr);
console.log('format:', format);