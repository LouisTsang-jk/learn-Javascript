# 响应性(Reactivity)
数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。

## 工作原理
当你把一个普通的 `JavaScript` 对象传入 `Vue` 实例作为 `data` 选项，`Vue` 将遍历此对象所有的 `property`，并使用 `Object.defineProperty` 把这些 `property` 全部转为 `getter/setter`。Object.`defineProperty` 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。   

每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

![依赖](pic/1.png)

> 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。

# 参考
[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
