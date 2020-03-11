# VueX 
VueX是Vue的*状态管理器*，采用集中式存储关理应用的所有组件状态。
解决以下场景：
1. 传参的方法对多层嵌套的组件会非常繁琐，对兄弟组件间的状态传递无能为力。
2. 有时候采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝时结构非常脆弱，很难维护代码。
## 概念
### 仓库(store)
`store`基本上就是个容器，包含应用中大部分的*状态(state)*。与纯粹的全局对象又有以下区别：
+ Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，相应组件也会得到更新。
+ 无法直接修改store中的状态。修改store中状态的唯一途径是通过显式地*提交(commit)mutation*。
> 这样方便跟踪每个状态变化
### 状态(state)
Vuex使用*单一状态树*，用一个对象包含全部的对应层级状态。作为`唯一数据源(SSOT)`。
#### 组件中获取Vuex状态
```
Compontent Counter
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return store.state.count
        }
    }
}
```
这种模式会导致组件依赖全局状态单例。可以将Vuex从根组件注入到每个子组件。
#### mapState