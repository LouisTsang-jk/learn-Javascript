# Koa
## 基本函数
- use

- listen

## 重点
- koa-compose（洋葱模型）
```
function compose (middleware) {
  // 对入参进行校验
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      // 判断是否重复执行next
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      // 取出下一个执行的中间件
      let fn = middleware[i]
      // 中间件已全部执行完毕
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        // 执行后返回成功态Promise
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
```
input demo
```
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('one')
  await next();
  console.log('one-next');
})

app.use(async (ctx, next) => {
  console.log('two')
  await next();
  console.log('two-next');
})

app.use(async (ctx, next) => {
  console.log('three')
  await next();
  console.log('three-next');
})

app.listen(8080)
```
先执行这段代码，得到：
```
one
two
three
three-next
two-next
one-next
```
大致是这么一个执行顺序：   
1. 首先的到this.middleware = [one, two, three]
2. 执行listen中this.callback()
3. 执行compose
- 入参校验
- 返回
- 
- 3种错误处理