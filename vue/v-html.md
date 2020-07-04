# v-html
- 预期： 
`string`
- 详细：
更新元素的`innerHTML`,**内容按照普通HTML插入,并不回作为Vue模版进行编译。**
- 原理：
`v-html`会移除节点下的所有节点,调用html方法,通过addProp添加innerHTML属性。