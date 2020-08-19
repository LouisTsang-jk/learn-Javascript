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
### 大致流程
- `koa`获取body
- `es-module-lexer`解析并取`import`内容
- `import`内容是否为`npm`模块
- 返回资源路径
### 拦截请求
当通过`import`导入`node_modules`的文件，vite会对路径进行拦截并替换。
```
import Vue from 'vue'
// =>
import Vue from '/@modules/vue'
```
浏览器接收之后继续请求`/@modules/vue`，然后vite再次拦截，由vite内部将`/@modules`解析成真实的文件地址，并返回给浏览器。
### 热更新
- 客户端
`src/client/client.ts`，创建`WebSocket`客户端，监听服务端的HMR消息推送。

- 服务端
`src/node.serverPluginHmr.ts`。监听项目文件的变更，进行处理。

### JSX & TypeScript
针对这两者，vite使用`esbuild`进行转换。
### 优势
- 冷启动速度快
- 按需编译
- 热加载快
### 劣势
- 整个页面刷新可能会比工具打包速度慢(导入链过深的情况)
- 开发环境用ESM，生产环境用rollup，因此两个环境可能有差异