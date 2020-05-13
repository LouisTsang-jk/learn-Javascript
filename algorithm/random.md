# 高纳德置乱算法(Fisher-Yates)
生成一个有限集合的随机排列。
## 过程
- 需要随机置乱的n个元素数组a
- 从0到n开始循环，循环变量i
- 生成随机数K，K为0到n之间的随机数
- 交换i位和K位的值

## 实现
```
var a = [0,1,2,3,4,5,6,7,8,9];
function sort (arr) {
  var k = 0;
  var temp = 0;
  for (let i = 0; i < arr; i++) {
    k = Math.floor(Math.random() * (arr.length - i));
    temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }
}
```