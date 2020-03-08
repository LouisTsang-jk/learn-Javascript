# 类型断言(Type Assertion)
类型断言手动指定一个值的类型。
## 语法
1. 
```
<类型>值
```
2.
```
值 as 类型
```
## demo
使用类型断言，将`something`断言成`string`
```
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return (<number>something).toString().length;
  }
}
```