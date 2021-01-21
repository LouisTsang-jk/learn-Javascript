# Module
模块化就是将一个复杂的程序依据一定的规则封装成几个块(文件)，并将其组合在一起。  
块内部数据和实现是私有的，是指向外暴露一些接口(方法)以此来与其他模块通信。
## CommonJS
使用同步的方式加载模块。使用全局性方法`require()`来加载模块。
```
// main.js
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
// circle.js
const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
```
## AMD(Asynchronous Module Definition)
异步加载模块，允许指定回调函数。也采取`require()`语句。
`不能按需加载`
> `requre([module], callback)`
> `define(id, [depends], callback)`
```
// main.js
require(['math'], function (math) {
  math.add(2, 3);
})
// math.js
define(function () {
  const add = function (a, b) {
    return a + b;
  }
  return {
    add
  }
})
```
## CMD
按需加载。
```
define(function (rerquire, exports) {
  a = require('./');
  a.doSomething();
})
```
## UMD(Universal Module Definition)
通用模块，兼容AMD和commonJS规范。AMD异步加载，commonJS同步加载。
## ES6