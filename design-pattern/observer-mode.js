// 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，
// 当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。
// 定义发布者类
class Publisher {
  constructor () {
    this.observers = [];
  }
  // 增加订阅者
  add (observer) {
    this.observers.push(observer);
    console.log('当前订阅者列表:', this.observers);
  }
  // 移除订阅者
  remove (observer) {
    console.log('Publisher remove invoked', this.observers);
    this.observers.forEach((item, index) => {
      if (item === observer) {
        this.observers.splice(index, 1);
      }
    })
  }
  // 通知所有订阅者
  notify () {
    console.log('Publisher notify invoked');
    this.observer.forEach((observer) => {
      observer.update(this);
    })
  }
}
// 定义订阅者
class Observer {
  constructor () {
    console.log('Observer created');
  }
  update () {
    console.log('Observer update invoked');
  }
}
// application
// 模拟应用场景
class PrdPublisher extends Publisher {
  constructor () {
    super();
    this.prdState = null;
    this.observers = [];
    console.log('PrdPublisher created');
  }
  getState () {
    console.log('PrdPublisher.getState invoked');
    return this.prdState;
  }
  setState (state) {
    console.log('PrdPublisher.setState invoked');
    this.prdState = state;
    this.notify();
  }
}

class DeveloperObserver extends Observer {
  constructor () {
    super();
    this.prdState = [];
    console.log('DeveloperObserver created');
  }
  update (publisher) {
    console.log('DeveloperObserver.update invoked');
    this.prdState = publisher.getState();
    this.work();
  }
  work () {
    const prd = this.prdState;
    console.log('996');
  }
}