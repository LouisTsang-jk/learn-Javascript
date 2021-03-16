# 继承
## 借用构造函数
```
function Super () {
  this.a = 'a';
}
function Sub () {
  this.b = 'b';
  Super.call(this);
}
Sub.prototype = new Super();
const sub = new Sub();
// 可以在子类型构造函数中向超类型构造函数传递参数
```
## 原型式继承
```
function object (o) {
    function F () {}
    F.prototype = o;
    return new F();
}
const Person = {
    name: 'Person',
    friends: []
}
const louis = object(Person);
louis.name = 'louis';
louis.friends.push('biaobiao');
const jolene = object(Person);
jolene.name = 'jolene';
jolene.friends.push('yiyi');
console.log('louis:', louis);
console.log('jolene:', jolene);
// other
const other = Object.create(Person, {
    name: {
        value: 'Other'
    }
})
console.log('other', other);
```
## 原型链继承
```
function Super () {
    this.a = 'a';
}
function Sub () {
    this.b = 'b';
}
Sub.prototype = new Super();
const sub = new Sub();
```
## 寄生式继承
## 组合继承
```
// 原型链 + 借用构造函数
function Super () {
    this.a = 'a';
}

function Sub () {
    this.b = 'b';
    Super.call(this);
}
Sub.prototype = new Super();
Sub.prototype.contructor = Sub;
```