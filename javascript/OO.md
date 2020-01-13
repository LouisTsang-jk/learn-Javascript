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