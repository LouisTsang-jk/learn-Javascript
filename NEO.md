# url到页面
1. URL解析
2. 缓存检查
3. DNS解析
4. TCP三次握手
5. 数据传输
6. TCP四次挥手
7. 页面渲染

# 浏览器渲染
[浏览器渲染](standard/CRP.md)

# DOM渲染过程
1. 构建DOM树
2. 构建CSSOM样式表
3. 构建渲染树
4. 布局
5. 绘制
# 页面渲染中执行的事件
1. 发出加载资源的请求
2. document加载结束并解析,此时css等其他资源未加载完成
此时`readyState`为`interactive`，表示document已经load并解析完成。触发`readystatechange`，然后触发`DOMContentLoaded`
3. css等资源加载完毕
触发`window.load`事件

# async & defer(script属性)

# CSS
  ## 清除浮动
  [浮动](css/Float.md)
  ## 定位层级（fixed）（absolute）
  [position](css/Position.md)
  ## 盒子模型
  [盒子模型](css/BoxModel.md)
  ## 选择器权重
  [CSS权重](css/Specificity.md)
  ## BFC
  [BFC](css/ElementBox.md#BFC)
  ## 边距重叠
  边界折叠(margin collapsing)
  以下三种情况会形成外边距重叠：
  + 同一层相邻元素之间
  相邻两个元素之间的外边距重叠，除非后一个元素加上clear-fix清除浮动
  + 没有内容将父元素和后代元素分开
  没有border、padding、content、BFC、clear-fix、max-height、min-height来分开一个块级元素的上/下边界，则会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。
  + 空的块级元素
# 存储
  ## http缓存
  ## indexDB
  ## sessionStorage
  ## localStorage
  ## cookies
  ## 离线缓存(application cache)【淘汰】

# 优化
  ## 构建速度
  - 开启babel-loader缓存
  - noParse避免重复打包
  - happypack多进程打包
  - ParallelUglifyPlugin多进程压缩
  - DllPlugin 动态链接库插件
  ## 打包
  ## 性能优化
    ### 工程化
    1. gzip
    2. js压缩(tree shaking/es module/动态import/动态polyfill)
    3. 图片加载(webp)
    4. 服务端渲染/客户端预渲染
    5. CDN
    6. Webpack Dll，浏览器缓存
    7. 骨架屏
    8. Webpack(拆包Chunk/Base64)
    9. 减少重定向
    ### 细节
    1. 图片(占位/懒加载/雪碧图)
    2. prefetch/preload预加载特性
    3. 服务器合理设置缓存策略
    4. 减少dom操作
    5. 合并接口请求
    6. 首页不加载不可视组件
# 性能检测
  - Performance
  - addEventListener(load/domContentLoaded)
# 框架
 ## Vue
  - 双向绑定
  - 依赖收集
  - Diff算法
  - attrs
  - listeners
  - 虚拟DOM优点
    1. 组件高度抽象化
    2. 实现SSR/同构渲染
    3. 框架跨平台
  - action与mutation区别
 ## Koa
  - 洋葱模型
 ## Webpack
  - 工作原理
  - 优化
  - 
# 模块化
  [模块化](javascript/Module.md)
# This
# 闭包
*闭包能使内部函数访问外部函数的作用域。*在JavaScript，函数在每次创建时生成闭包。
# 原型链
作用域意味着代码区中变量和其他资源的可见性。
# 词法作用域
# 继承方式
# 作用域
# 事件循环
[EventLoop](javascript/EventLoop.md)
# 安全
[CSRF](javascript/AJAX.md#CSRF)
# 工程化
# 请求
 - ajax
 - fetch
# 跨域
[跨域](javascript/CORS.md#同源策略)

# GC
# 动画优化
  - 重绘
  - 回流
  [回流&重绘](javascript/Reflow&Repaint.md)
# 节流/消抖
# 算法
## 动态规划
  - 爬楼梯
  - 找硬币
  - 
## 二分查找(leetcode 704)
# 手写代码
  [手写](https://github.com/tang-yue/interview/tree/master/coding)
  ## promise
  ## instanceof
  ## call
  ## apply
  ## bind
  ## new
  ## EventEmitter
  [手写发布--订阅模式](https://github.com/tang-yue/interview/tree/master/coding#手写发布--订阅模式)

# 应用
- 虚拟列表
- 优化打包速度
- 封装Webpack
# 克隆
[克隆](javascript/Clone.md)
# 文件上传
[文件上传](https://juejin.cn/post/6844904106658643982)
# http1.0/http1.1/http2/https
[HTTP](https://github.com/tang-yue/interview/tree/master/network)

# 部门负责人
- 部门负责内容
- Code Review
- 分享会

# HR
- 工作时间
- 加班补贴
- 年终奖