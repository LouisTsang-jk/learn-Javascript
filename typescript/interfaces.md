# 接口(Interfaces)
接口(Interfaces)来定义对象类型。  
*在面向对象语言中，接口(Interfaces)是对行为的抽象，具体如何行动需要由类(classes)去实现(implement)。*，除此之外，常用于对象的形状(Shape)进行描述。
```
interface Person {
  name: string;
  age: number;
  [propName: string｜number]: any;
}
let tom: Person = {
  name: 'Tom',
  age: 25
}
```
## 可选属性
`?`表示该属性可以不存在  
`[propName:string|number]:any`定义了任意属性取`string`或者`number`类型的值。
*一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集*
## 只读属性
`readonly`定义只读属性
```
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
```
## 类实现接口
把特性提取成接口(interfaces)，用`implements`关键字实现。  
举例子，门使一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候另外一个类，车，也有报警器功能，这时候就考虑把报警器提取成一个接口，防盗门和车都去实现它。
```
interface Alarm {
  alert(): void;
}
// 一个类可以实现多个接口
interface Light {
  lightOn(): void;
  lightOff(): void;
}
class Door {

}
class SecuityDoor extends Door implements Alarm, Light {
  alert() {
    console.log('SecurityDoor alert');
  }
}
class Car implements Alarm {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}
```
## 接口继承接口
```
interface Alarm {
  alert(): void;
}
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}
```
## 接口继承类
```
class Point {
  x: number;
  y: number;
  constructor(x: number,y: number){
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = {x: 1,y: 2,z: 3};
```