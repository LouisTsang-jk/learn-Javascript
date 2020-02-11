# 原型 `Prototype`  
每个实例对象(object)都有一个*私有属性(__proto__)*。指向它的构造函数的*原型对象(prototype)*。这个原型对象也有它的原型对象，层层向上直到原型对象为null。  
*几乎所有JavaScript中的对象都是位于原型链顶端的`Object`的实例*