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

## 部署开发环境
### 本地安装Webpack
```
npm install --save-dev webpack webpack-cli
```

### 安装开发服务器
```
npm install --save-dev webpack-dev-server
```
package.json
```
+ "start": "webpack-dev-server --open",
```

### 模块热替换「HMR」(Hot Module Replacement)
webpack.config.js
```
const webpack = require('webpack');
entry: {
  app: './src/index.js'
}
devServer: {
  contentBase: './dist',
  hot: true
}
```

## 工作流程
- 初始化参数
从配置文件和`Shell`语句中读取与合并参数，得出最终的参数
- 开始编译
用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的`run`方法开始执行编译
- 确定入口
根据配置中的`entry`找出所有的入口文件
- 编译模块
从入口文件出发，调用所有配置的`Loader`对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
- 完成模块编译
在经过第4步使用`Loader`翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
- 输出资源
根据入口和模块之间的依赖关系，组装成一个个包含多个模块的`Chunk`，再把每个`Chunk`转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
- 输出完成
在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统