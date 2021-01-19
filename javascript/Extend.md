# 继承「extend」
## 原型链继承
```
function Super () {
    this.a = 'a';
}
function Sub () {
    this.b = 'b';
}
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
```
## 借用构造函数
```
function Super () {
    this.a = 'a';
}
function Sub () {
    this.b = 'b';
    Super.call(this);
}
```
## ES6 Class
```
class Super {
    constructor (a) {
        this.a = a;
    }
}
class Sub extends Super {
    constructor (a, b) {
        super(a);
        this.b = b;
    }
}
```