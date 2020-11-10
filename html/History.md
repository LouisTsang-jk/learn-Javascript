# Histroy
## history.pushState(state, title[, url])
- state
JavaScript对象，触发`popstate`事件的时候会在`e.state`返回
- title
大多数浏览器忽略该参数
- url
新历史记录条目的URL由该参数指定。`浏览器不会在调用pushState()之后尝试加载此URL。(同样受同源策略限制)`