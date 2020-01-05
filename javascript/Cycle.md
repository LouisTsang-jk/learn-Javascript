# Cycle
## do-while
```
do{
  statement
}while(expression);
```
后测试循环语句
> 循环体代码执行之后才会测试出口条件
> (因此循环体内的代码至少会被执行一次)
- - -
## while
```
while(expression) statement
```
前测试循环语句
> 执行循环体代码之前会对出口条件求值
> (因此循环体内的代码可能不会被执行)
- - -
## for
前测试循环语句
```
// 无限循环
for(;;){statement}

// 改造成while循环
for(;expression;){
  statement;
}
```
- - -
## for-in
```
for(property in expession) statement
```
(输出循序因浏览器而异)
> 建议在使用for-in循环之前，先检测确认该对象的值不是null或undefined
- - -
## label
```
label:statement
...
break label;
continue label;
```
定义后标签由break或者continue语句引用。
- - -
## break
退出当前循环，不再执行。
- - -
## continue
跳过当前循环，继续执行。
- - -
## with
将代码**作用域**设置到特定的对象中
```
with (expression) statement;
```
**严格模式不允许使用with语句，否则视为语法错误**
> 因为with语句无法在编译时确认属性归属哪个对象
