# 泛型(Generics)
定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
## demo
实现函数`createArray`，创建指定长度的数组，并填充默认值
```
function createArray(length: number,value: T): Array<T> {
  let result:T[] = [];
  for(let i = 0;i < length>; i++) {
    result[i] = value;
  }
  return result;
}
createArray<string>(3,'x');
```
## 多个类型参数
```
function swap<T, U>(tuple:[T, U]: [U, T]) {
  return [tuple[1], tuple[0]];
}
swap([7,'seven']); // ['seven',7]
```
## 泛型约束
```
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```
这里用`extends`约束了泛型`T`必须符合接口`Lengthwise`的形状，也就是必须包含`length`属性。

## 泛型接口
用接口定义一个函数需要符合的形状
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySeatch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1; 
}
```
含有泛型的接口
```
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T):Array<T> {
  let result: T[] = [];
  for(let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
createArray(3,'x'); // ['x','x','x']
```

## 类数组
类数组都有自己的接口定义，如`IArguments`,`NodeList`,`HTMLCollection`
```
function sum() {
  let args: IArguments = arguments;
}
```