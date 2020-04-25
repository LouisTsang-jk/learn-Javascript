# Object 
## Properies
+ .prototype.constructor
## Methods
+ .assign()
将所有可枚举属性的值从一个或多个源对象复制到目标对象。
*被覆盖对象的属性中有相同的键，则属性将被源对象中的属性覆盖。*  
该方法只会拷贝源对象自身的并且可枚举的属性到目标对象。*会调用源对象的[[`Get`]]和目标对象的[[Set]]*   
> `aasign`方法执行的是浅拷贝   
`浅克隆(不克隆继承值)`   
```
function clone (obj) {
  return Object.assign({}, obj)
}
`浅克隆(克隆继承值)`
```
function clone (obj) {
  const objProto = Object.getPrototypeOf(obj);
  return Object.assign(Object.create(objProto), obj);
}
```
```
`合并对象`    
```
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign(obj1, obj2)
// => { a:1, b:2 }
// !important
// obj1 => { a:1, b:2 }
obj1 === obj3
// => true
```
+ .create()
创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`，实现类式继承
```
const person1 = {
  father: 'louis tsang'
}
const person2 = Object.create(person1)
person2.father // => louis tsang
```
+ .defineProperties()
直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
+ .defineProperty()
直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
+ .entries()
+ .freeze()
+ .fromEntries()
+ .getOwnPropertyDescriptor()
+ .getOwnPropertyDescriptors()
+ .getOwnPropertyNames()
+ .getOwnProertySymbols()
+ .getPrototypeOf()
+ .is()
+ .isExtensible()
+ .isFrozen()
+ .isSealed()
+ .keys()
+ .preventExtensions()
+ .hasOwnProperty()
+ .isPrototypeOf()
+ .propertyIsEnumerable()
+ .toLocaleString()
+ .toString()
+ .valueOf()
+ .seal()
+ .setPrototypeOf()
+ .values()