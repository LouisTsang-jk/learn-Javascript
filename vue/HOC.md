# HOC(Higher-order component)
参数为组件，返回值为新组件的函数。
`Vue`中组件即函数，高阶组件就是高阶函数。
```
export default function withComponent (WrapperComponent) {
  return {
    mounted () {
      console.log('挂载');
    },
    props: WrappedComponent.props,
    render (h) {
      return h (WrapperComponent, {
        on: this.$listeners,
        attrs: this.$attrs,
        props: this.$props
      })
    }
  }
}
```

# 参考
[在Vue中使用HOC模式](https://juejin.cn/post/6862175878475546638)