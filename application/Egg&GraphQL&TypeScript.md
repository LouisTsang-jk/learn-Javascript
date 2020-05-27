# 
## 环境
1. npm init egg --type=ts
2. npm i
3. npm i --save @switchdog/egg-graphql
4. 开启插件`config/plugin.ts`
```
graphql: {
  enable: true,
  package: '@switchdog/egg-graphql',
}
```
5. 配置插件`/config/config.default.ts`
```
config.graphql = {
  router: '/graphql',
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
  // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
  graphiql: true,
  apolloServerOptions: {
    tracing: true, // 设置为true时，以Apollo跟踪格式收集和公开跟踪数据
    debug: true, // 一个布尔值，如果发生执行错误，它将打印其他调试日志记录
  },
};
```
6. 中间件开启`graphql`
7. npm i egg-cors --save
8. 开启插件`config/plugin.ts`
```
cors: {
  enable: true,
  package: 'egg-cors',
}
```
9. 配置插件`/config/config.default.ts`
```
config.cors = {
  origin: '*', 
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
}
```
10. 关闭`CSRF` `/config/config.default.ts`
```
config.security = {
  csrf: {
    ignore: () => true
  }
}
```