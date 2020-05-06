# 状态机(State Machine)
## 状态模式
允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类。   
魂斗罗： 
```
class Contra {
  constructor () {
    // 存储当前待执行的动作
    this._currentstate = {};
  }
  // 添加动作
  changeState () {
    // 初始化动作队列
    this._currentstate = {};
    // 遍历添加的动作
    Object.keys(arguments).forEach(i => {
      this._currentstate[arguments[i]] = true;
    })
    return this;
  }
}
// 执行动作
contraGo () {
  // 当前动作队列中的动作依次执行
  Object.keys(this._currentstate).forEach(k => {
    Action[k] && Action[k].apply(this)
  })
  return this;
}
const Actions = {
  up: function () {
    console.log('up');
  },
  down: function () {
    console.log('down');
  },
  forward: function () {
    console.log('forward');
  },
  backward: function () {
    console.log('backward');
  },
  shoot: function () {
    console.log('shoot');
  }
}
var littlered = new Contra();
littlered.changeState('shoot', 'up').contraGo();
// => 'shoot up'
```
## 应用场景
- 一个由一个或多个动态变化的属性导致发生不同行为的属性，在与外部事件产生互动时，其内部状态就会改变，从而使得系统的行为也随之发生变化，那么这个对象就是有状态的对象。
- 代码中包含大量与对象状态有关的条件语句，像是`if...else`或`switch case`语句，且这些条件执行与否依赖于该对象的状态。

# 有限状态机(Finite-state machine)
状态模式下的一个模型，可以用有限状态及模型来模拟具有多种状态的对象。一般有以下特点：
- 事物拥有多种状态，任一事件只会处于一种状态不会处于多种状态。
- 动作可以改变事物状态，一个动作可以通过条件判断，改变事物到不同的状态，但是不能同时指向`多个`状态，一个时间，就一个状态。
- 状态总数是有限的。

# 参考
[](https://mp.weixin.qq.com/s?__biz=MzU0OTExNzYwNg==&mid=2247484240&idx=1&sn=fd5ef3e916fe5ac99141c4cc641311ea&chksm=fbb58899ccc2018f331a8bc2ecc87f75c23184f1397ed6490917b1265d4d2380b10c1dc8aa94#rd)