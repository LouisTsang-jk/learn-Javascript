# Vite
## 简介
基于原生ESM「ECMA Script Modules」的开发服务器，服务器端按需编译返回。生产环境则使用`rollup`打包
## 上手
```
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```
## 实现
### 工作流程
- `koa`服务端返回body
- `es-module-lexer`解析并取`import`内容
- `import`内容是否为`npm`模块
- 返回资源路径
### 拦截请求「/serverPluginModuleRewrite.ts」
当通过`import`导入`node_modules`的文件，vite会对路径进行拦截并替换。「使用es-module-lexer获取imports数组」
```
import Vue from 'vue'
// =>
import Vue from '/@modules/vue'
```
浏览器接收之后继续请求`/@modules/vue`，然后vite再次拦截，由vite内部将`/@modules`解析成真实的文件地址，并返回给浏览器。
#### SFC「Single File Components」「/serverPluginVue.ts」
解析单文件组件的时候，vite针对`.vue`文件拆分成三个部分处理。
- template
```
HelloWorld.vue?type=template
```
浏览器加载的`.vue`是`runtime`，所以需要服务器端编译完再返回给浏览器(返回的是render函数)。
- script
```
HelloWorld.vue
```
- style
```
HelloWorld.vue?type=style&index=0
```
### 热更新
- 客户端「src/client/client.ts」
创建`WebSocket`客户端，监听服务端的HMR消息推送。

- 服务端「src/node.serverPluginHmr.ts」
监听项目文件的变更，进行处理。

## JSX & TypeScript
针对这两者，vite使用`esbuild`进行转换。

## 优势
- 冷启动速度快
- 按需编译
- 热加载快
- ESM自带SourceMap
## 劣势
- 整个页面刷新可能会比工具打包速度慢(导入链过深的情况)
- 开发环境用ESM，生产环境用rollup，因此两个环境可能有差异

## 总结
vite实质主要还是将webpack中依赖收集解析的工作交给浏览器处理。
整个vite项目还在不断迭代，不过大致的工作流程应该还是这样走的。
目前来说替代webpack可能还有点困难，不过以后肯定是Vue3的首选构建工具。