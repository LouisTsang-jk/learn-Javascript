# webpack

## loader
`loader`能让webpack处理非JavaScript文件(webpack只能解析JavaScript)。`loader`将所有类型的文件转换为webpack能处理的有效模块，*然后再利用webpack的打包能力进行处理*。
## plugin
+ 打包优化
+ 压缩
+ 重新定义环境中的变量
+ ...

> 一般来说Loader是在打包前或打包时作用于单个文件。而Plugin一般在打包过程结束之后作用于包或者chunk级别。

## API

### require.context
获取一个特定的上下文，实现自动化导入模块，避免多次显示调用`import`导入模块。  
接受参数：  
+ `directory {String}`
读取文件路径
+ `useSubdirectories {Boolean}`
是否遍历文件的子目录
+ `regExp {RegExp}`
匹配文件的正则
Demo: 
```
const requireComponent = require.context('./common', false, regExp = /^.vue$/);
console.log(requireComponent.keys());
// => ['./component1.vue','./component2.vue']
```
*导入`common`文件夹下，`.vue`后缀的文件*

优点：
+ 方便
+ 减少代码量和维护成本
缺点：
+ 代码不易理解
+ 无法通过编辑器快速定位
+ ts不能正常类型推导
+ 编辑器自动补全可能存在问题