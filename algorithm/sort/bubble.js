// 冒泡算法(升序)
function random (min = 0, max = 999) {
  return Math.round(Math.random() * (max - min) + min);
}
let arr = new Array(random(5,15)).fill(0);
arr = arr.map(e => {
  return random();
});
console.log('arr', arr);
function bubble (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 -i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
function swap ([a, b]) {
  return [b, a];
}
const format = bubble(arr);
console.log('format:', format);