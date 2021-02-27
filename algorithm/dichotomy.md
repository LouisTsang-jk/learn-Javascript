# 二分法
输入：
arr(从小到大排好序的数组)
target(数组arr中的一个元素)
输出：
index(target为于arr中的索引)
例如：
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 1;
dichotomy(arr,target);
//-> 2

```
function dichotomy(arr, target) {
  if (arr !== null) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = high >> 1;
      console.log(`low:${low},mid:${mid},high:${high}`);
      if (target === arr[mid]) {
        return mid;
      } else if (target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}
```