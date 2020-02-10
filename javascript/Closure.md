# 闭包Closure
函数与对其状态即*词法环境(lexical environment)*的引用共同构成*闭包(closure)*。  
**闭包能使内部函数访问外部函数的作用域。**在JavaScript，函数在每次创建时生成闭包。  
> `意义：`  
> 允许函数与其操作的某些数据(环境)关联起来。(类似与面向对象编程)



### 词法作用域


## 应用
1. 函数工厂
```
function makAdder(x){
  return function(y){
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```
使用*makeAdder(函数工厂)*创建了指定的值和它的参数相加求和的函数。
add5和add10都是闭包，共享相同的函数定义，*但是保存了不同的词法环境*。
> 在add5的环境中，`x`为5。而在add10中，`x`为10
2. 修改元素字体大小demo  
JavaScript
```
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```
HTML  
```
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```
3. 模拟私有方法  
使用闭包定义公共函数，令其可以访问私有函数和变量*(模块模式module pattern)*
```
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();

console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */
```
# 引用
[MDN 闭包Closure](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)