# 事件冒泡event bubbling
事件开始时由最具体的元素(嵌套层次最深的元素)接受，然后逐级向上传播到较为不具体的元素(文档)。
# 事件捕获event capturing
事件捕获的思想 是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。
# DOM事件流
1. 事件捕获阶段
2. 处于目标阶段
3. 事件冒泡阶段
# HTML事件处理程序
* 代码规范，为了避免使用 HTML 实体，HTML中执行的JavaScript请使用单引号，避免使用双引号 *
```
<input type="button" value="Click Me" onclick="alert(&quot;Clicked&quot;)" />
```

# 监听事件
+ addEventListener
1. 要处理的事件名
2. 作为事件处理程序的函数
3. 布尔值(true->捕获阶段调用事件)(false->冒泡阶段调用事件)

+ removeEventListener
1. 要处理的事件名
2. 作为事件处理程序的函数
* 不能使用匿名函数 *
3. 布尔值(true->捕获阶段调用事件)(false->冒泡阶段调用事件)

# 禁止默认事件
event.preventDefault()

# 阻止冒泡捕获
event.stopPropagation()

# 事件委托(利用事件冒泡)
在较高的DOM树上添加事件处理程序，来获取更低的性能消耗。

# DOM中事件模拟
...