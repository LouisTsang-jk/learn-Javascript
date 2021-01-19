# 理论
√暂时性死区
√作用域
√用reduce实现filter/map
√变量提升
√1px
√defer和async
WS
√EventLoop
√闭包
文件切割上传slice
行内/块级/替换
Polyfill
- promise
- call/apply
- bind
- symbol
- instanceof
- event emitter
Url输入到地址栏发生的事情
- URL解析
- 缓存检查
- DNS解析
- TCP三次握手
- 数据传输
- TCP四次挥手
- 页面渲染
Vue2/3实现原理
洋葱模型
√Prototype
继承方式
https/http2
Nodes和Element区别
√原型链
前端安全: https://segmentfault.com/a/1190000037657222
# 应用
# 算法
动态规划(找硬币/剪绳子)
二分法
快速排序
爬楼梯
# 设计模式
单例
工厂
观察者
适配器
# 实际工作
什么时候使用vuex
-> 多个应用场景对同一个值进行修改
如果要设计一个mvvm框架，处理哪些问题？
(解决思路)
# 扩展学习
chrome插件(ast)(显示边框)(自定义样式)（自定义脚本）
vsc插件(ast)
WS
# 其他
https://juejin.im/post/6844903570001625102
https://juejin.im/book/6844733800300150797
https://juejin.im/book/6844733790204461070

# 环境配置
- 自动化部署
- 包优化
- 渲染速度优化
- 开发环境

# CAUTIOUS
- 如何二次封装Echart
- 部署开发/测试/线上环境
- webpack优化(白屏/首屏)
  - 白屏
    1. 预渲染(prerender-spa-plugin)
    2. 骨架屏
  - 首屏
    1. 路由懒加载
    2. 图片懒加载
    3. 采用CDN，配置webpack的`externals`(减少vendor.js)
    4. 开启gzip
  - 如何监控数据
  performance Api
- webpack配置(多页面入口)

- 权限(页面/按钮)

- chart-export所用到的设计模式
  1. 单例
  2. 生成器
  3. 观察者(基于node event.js)
  4. 模版方法
  
- 缓存方式
  1. 强缓存(Expires/Cache-Control)
    - Expires: 过期时间
    - Cache-Control: `cache-control: max-age=2592000`第一次取到资源后2592000秒后再次请求。
    > `Cache-Control`优先级高于`Expire`
  2. 协商缓存(Last-Modified/Etag)


- CSRF
- 洋葱模型
- proxy/区分环境
- 拖拽
v-dragable
(使用生成器模式->)
- websocket