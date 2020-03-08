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