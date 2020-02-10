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
此处只有一个词法环境，为三个函数所共享
+ `Counter.increment`
+ `Counter.decrement`
+ `Counter.value`
该环境创建于一个立即执行的匿名函数体。
该环境包含两个私有项：  
+ privateCounter 变量
+ changeBy 函数  
在匿名函数外部无法直接访问，必须通过匿名函数返回的三个公共函数访问。

# 注意
如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。  
而且闭包使函数中的变量都保存在内存中，造成很大的内存消耗。(内存泄露)
# 引用
[MDN 闭包Closure](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)  
[童欧巴 公司心来的女实习生问我什么是闭包](https://zhuanlan.zhihu.com/p/78273000)  