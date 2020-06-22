# 装饰器(decorators)
装饰器可以用于类，也可以用在类属性。
## 实例
```
@decorator
class Cat () {}

class Dog {
  @decorator
  run() {}
}
```
## 作用与类的装饰器
```
function isAnimal(target) {
  target.isAnimal = true;
  return target;
}

@isAnimal
class Cat {
  ...
}
console.log(Cat.isAnimal); // true
```
等同于：
```
Cat = isAnimal(function Cat () { ... })
```
# 作用与类属性的装饰器
希望将部分属性置成可读，避免其他人对其进行修改，可以使用装饰器
```
function readonly (target, name, descriptor) {
  discriptor.writable = false;
  return discriptor;
}
class Cat {
  @readonly
  say () {
    console.log('meow');
  }
}

var kitty = new Cat();
kitty.say = function () {
  console.log('woof');
}
kitty.say(); // meow
```
`target`、`name`、`descriptor`是`Object.defineProperty`的参数，装饰器作用与属性的时候，实际通过`Object.defineProperty`进行扩展和封装。
```
let descriptor = {
  value: function () {
    console.log('meow');
  },
  enumerable: false,
  configurable: true,
  writable: true
};

descriptor = readonly(Cat.prototype, 'say', descriptor) || descriptor;
Object.defineProperty(Cat.prototype, 'say',descriptor);
```
1. 装饰器作用于类本身的时候，操作对象是类本身。
2. 装饰器作用与某个属性的时候，操作对象是类属性的描述符(descriptor)   
**装饰器是一个作用于函数的表达式，接受三个参数`target`、`name`、`descriptor`**，返回装饰后的`descriptor`对象。
# 参考
[](https://aotu.io/notes/2016/10/24/decorator/index.html)