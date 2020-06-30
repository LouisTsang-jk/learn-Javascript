# keep-alive
抽象组件，并不会实际渲染，当使用`keep-alive`包裹动态组件的时候，会缓存不活动的组件实例，而不销毁。
## abstract
这个属性用来判断该组件是否为抽象组件，抽象组件不渲染成实际的DOM节点。
## created
- cache
- keys
初始化两个对象存放VNode(虚拟DOM)和VNode对应Key集合
## mounted
监听黑白名单变动，实时更新(删除)cache。`pruneCache`函数核心也是调用`pruneCacheEntry`。
```
this.$watch('include', val => {
  pruneCache(this, name => matched(val, name))
})
this.$watch('exclude', val => {
  pruneCache(this, name => !matched(val, name))
})
```
## destroyed
删除`cache`中缓存的VNode实例。**遍历调用pruneCacheEntry函数**
```
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroyed() // 执行组件的destroy钩子函数
  }
  cache[key] = null
  remove(keys, key)
}
```
## render