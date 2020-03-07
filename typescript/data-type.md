# 原始数据类型(Primitive data types)
## + 布尔值 Boolean
```
let isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);
```
## + 数值 Number
```
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// 二进制
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```
`0b1010`二进制   
`0o744`八进制
## + 字符串 String
```
let myName: string = 'Tom';
let sentence: string = `Hello,my name is ${myName}`
```
## + Null
## + Undefined
`undefined`和`null`是所有类型的子类型。`undefined`类型的变量可以赋值给`number`类型的变量。
## + Symbol

# 任意值(Any)
如果是`any`类型，允许被赋值给任意类型。在任意值上访问任何属性和方法都是允许的。  
`类型推论`  
如果没有明确指定类型，TypeScript会依照类型推论(Type Inference)的规则推断类型。

```
let anyThing:any = 'hello';
console.log(anyThing.myName);
```
# 对象类型(Object types)

# 联合类型(Union Types)
表示取值可以为多种类型中的一种。
```
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```
联合类型使用`|`分隔每个类型。可以访问`联合类型`的所有类型里`共有`的属性或方法。若`非共有`则报错。
```
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错
```
