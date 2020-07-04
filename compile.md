# compile
- 参数
`{string} template`
- 用法
将模版字符串编译成render函数。
```
const element = `<div>Hello {{world}}</div>`
const res = Vue.complie(element);
new Vue({
  data: {
    world: "World"
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})
```