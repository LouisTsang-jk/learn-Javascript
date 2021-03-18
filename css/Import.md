# CSS文件引入
## @import和link
```
<link rel="stylesheet" type="text/css" href="xxx.css"></link>
<style type="text/css">
  @import url()
</style>
```
### 差异
1. @import只能导入样式表，link还可以加载RSS等
2. @import在CSS2.1被支持，link不存在兼容性问题
3. link标签可以动态插入
4. link比@import先加载