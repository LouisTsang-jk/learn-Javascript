# 构造函数模式
```
function Person(age,name,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.speak = function(){
    alert(this.name);
  }
}
```
经历了四个步骤
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象
3. 执行构造函数中的代码
4. 返回新的对象

# prototype
### in
属性无论是直接在对象上访问到还是通过原型访问到都会返回true。
### hasOwnProperty
仅有在当前对象直接访问到才返回true。
所有hasOwnProperty和in一起使用可以判断属性是在原型上还是当前对象上。

### 字面量方式修改prototype

### 私有变量
外部不能访问函数内定义的变量，所以也可以称函数内定义的变量为私有变量。
能够访问私有变量的称为特权方法。
```
function Person(name){
  this.name = name;
  this.sayName = function(){
    return name;
  }
}
```
```

```

# 继承
```
function Animal(){
	this.spcies = "animal";
}
function Dog(){
	this.bark = function(){
		console.log("barkkkkkkk");
	}
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
```