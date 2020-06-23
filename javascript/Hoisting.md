# Hoisting「变量提升」
# 优先级
函数声明 > arguments > 变量声明
# 练习题
1.```
var c = 1;
function c(c) {
  console.log(c);
  var c = 3;
}
console.log(c);
c(2);
```
// => TypeError: c is not a function
函数声明提升，执行到`console.log(c)`的时候，`c`已经重新赋值为`1`。
2.```
console.log(c);
var c;
function c(a) {
  console.log(a);
  var a = 3;
  function a() {}
}
c(2);
变量提升优先级
```
3.```
var name = 'hello';
(function () {
    if (typeof name === 'undefined') {
        var name = 'world';
        console.log(name);
    } else {
        console.log(name);
    }
})();
```