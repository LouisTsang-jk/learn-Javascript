# JavaScript Trick
## 安全的类型检测
```
function checkType(value){
  return Object.prototype.toString.call(value);
}
```
结果:
+ [object Number]
+ [object String]
+ [object Undefined]
+ [object Null]
+ [object NaN]
+ [object Symbol]
+ [object Map]
+ [object Set]
+ [object RegExp]
+ [object Array]
+ [object Function]
```
function checkType(value){
  return Object.prototype.toString.call(value).match(/(?<=object ).+(?=])/g)[0];
}
```
---
## 快速生成索引数组
```
function generateArray(num){
  return Array.from(new Array(num),(item,index)=>index);
}
generateArray(10);
// -> [0,1,2,3,4,5,6,7,8,9]
```
---
## ???格式化数字(数字分割)
```
function numberSplit(num){
  return 
}
```
---
## ???获取get请求的参数和值
```
...
```
---
## 检验是否是正确的十六进制颜色码
```
function isColor(color){
  return /^#(?:[0-9a-zA-Z]{6}|[0-9a-zA-Z]{3})$/g.test(color);
}
```
---
## 安全作用域的构造函数
```
function Person(name,age,job){
  if(this instanceof Person){
    this.name = name;
    this.age = age;
    this.job = job;
  }else{
    return new Person(name,age,job);
  }
}
```
---
## 防篡改对象
```
let person = {name:1};
Object.preventExtensions(person);
obj.age = 18;
// obj.age -> undefined
```
---
## 密封对象
与preventExtensions不一样，密封的对象不可删除
```
let person = {name:1};
Object.seal(person);
obj.age = 18;
// obj.age -> undefined
```
---
## 冻结对象
```
let person = {name:1};
Object.freeze(person);
obj.age = 18;
// obj.age -> undefined
```
---
## 获取文件后缀
```
const str = 'apple.jpg';
const reg = /(?<=\.).+/g;
str.match(reg)[0]
// -> jpg
```

## 伪数组对象的遍历
```
let fakeArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
Array.prototype.slice.call(fakeArray);
```

## 
```
const arr = new Array(5).fill([]);
arr[0] == arr[1] // => true
```

## 
`Function`是有`length`，这个`length`是根据`arguments`决定的。