# 原始数据类型(Primitive data types)
## + 布尔值 Boolean
```
let isDone:boolean = false;
let createdByNewBoolean:Boolean = new Boolean(1);
```
## + 数值 Number
```
let decLiteral:number = 6;
let hexLiteral:number = 0xf00d;
// 二进制
let binaryLiteral:number = 0b1010;
let octalLiteral:number = 0o744;
let notANumber:number = NaN;
let infinityNumber:number = Infinity;
```
`0b1010`二进制   
`0o744`八进制
## + 字符串 String
```
let myName:string = 'Tom';
let sentence:string = `Hello,my name is ${myName}`
```
## + Null
## + Undefined
`undefined`和`null`是所有类型的子类型。`undefined`类型的变量可以赋值给`number`类型的变量。
## + Symbol

# 任意值(Any)
如果是`any`类型，允许被赋值给任意类型。在任意值上访问任何属性和方法都是允许的。  
变量如果在声明的时候，未指定其类型，则会识别为任意值类型。
```
let anyThing:any = 'hello';
console.log(anyThing.myName);
```
# 对象类型(Object types)

# 