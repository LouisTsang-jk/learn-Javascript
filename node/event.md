# EventEmitter
Node.js核心API构建于惯用的异步事件驱动架构，其中某些类型的对象`「触发器(Emmitter)」`会触发命名事件来调用函数`「监听器(Listener)」`
> 事件命名一般是驼峰式的字符串
> 当`EventEmitter`对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。
- on
将函数绑定到命名事件
- once
注册最多可调用一次的监听器
- emit
用于触发事件
- newListener
`EventEmitter`实例在新的监听器被添加到其内部监听器数组之前，会触发自身的`newListener`事件
- removeListener
`removeListener`事件在`listener`被移除后触发