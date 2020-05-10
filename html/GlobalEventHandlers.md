# GlobalEventHandlers

## Event
- `onload`
用于处理`Window`、`XMLHttpRequest`、`<img>`等元素的加载事件，当资源已加载时被触发。
- `onblur`
用来获取或设置当前元素的onBlur事件的事件处理函数。
- `onerror`
1. 当JavaScript运行时错误(包括语法错误)，window会触发一个`ErrorEvent`接口的`error`时间，并执行`window.onerror()`。
2. 当一项资源(<img>或<script>)加载失败，加载资源的元素会触发一个`Event`接口，并执行该元素上的`onerror()`处理函数。这些error事件不会向上冒泡到window。(*加载一个全局的error事件处理函数可用于自动收集错误报告*)。
- `onfocus`
- `oncancel`
- `oncanplay`
- `oncanplaythrough`