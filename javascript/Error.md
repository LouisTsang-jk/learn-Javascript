# 错误处理
1. try-catch
```
try{
  ... // 这里触发错误之后会中断后续的执行
}catch(error){ // error是错误信息
  ... // 这里是对错误信息的处理
}finally{
  ... // 无论是否触发错误都执行
}
```
error.message
错误类型的属性

# 错误类型
1. Error
Error是基类型，所有错误都继承该类型，主要目的是为开发人员抛出自定义错误。
2. EvalError
错误使用eval()函数抛出的错误。
3. RangeError
数值超出范围
```
var items1 = new Array(-20); //抛出RangeError 
var items2 = new Array(Number.MAX_VALUE); //抛出RangeError
```
4. ReferenceError
```
var obj = x;
```
访问不存在的变量。
5. SyntaxError
重复声明，又或者错误的字符串传入eval()函数;
6. TypeError
变量保存着意外的类型，或者访问不存在的方法。
7. URIError

# 抛出错误(throw)
当遇到throw操作符时，代码会立即停止执行。
```
throw new Error("custom error");  
```

又或者利用原型链继承Error来创建自定义错误类型
```
function CustomError(message){
  this.name = "CustomError";
  this.message = message;
}
CustomError.prototype = new Error();
throw new CustomError("myError");
```