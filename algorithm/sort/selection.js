// 选择排序(升序)
function random (min = 0, max = 999) {
  return Math.round(Math.random() * (max - min) + min);
}
let arr = new Array(random(5,15)).fill(0);
arr = arr.map(e => {
  return random();
});
console.log('arr', arr);
function selection (arr) {

  return arr;
}
const format = selection(arr);
console.log('format:', format);