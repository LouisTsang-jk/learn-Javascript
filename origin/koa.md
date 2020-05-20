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
      // 即将执行中间件函数
      let fn = middleware[i]
      // 结束执行中间件函数，即将执行next函数
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
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
index = -1
dispatch(0) // 执行第一次`dispatch`
if (i`(0)` <= index`(-1)`) // false
index = i`(0)`
fn = middleware[i`(0)`]`(one)` // fn赋值为第一个中间件函数
if (0 === middleware.length`(3)`) // false
if (!fn`(one)`) // false
next = dispatch.bind(null, i`(0)` + 1) // 执行第二次`dispatch` - dispatch.bind(null, 1)
  if (i`(1)` <= index`(0)`) // false
  index = i`(1)`
  fn = middleware[i`(1)`] // fn赋值为第二个中间件函数
  if (i`(1)` === middleware.length`(3)`) // false
  if (!fn`(two)`) // false
  next = dispatch.bind(null, i`(1)` + 1) // 执行第三次`dispatch` - dispatch.bind(null, 2)
    if (i`(2)` <= index`(1)`) // false
    index = i`(2)`
    fn = middleware[i`(2)`] // fn赋值为第三个中间件函数
    if (i`(2)` === middleware.length`(3)`) // false
    if (!fn`(three)` // false
    next = dispatch.bind(null, i`(2)` + 1) // 执行第四次`dispatch` - dispatch.bind(null, 3)
      if (i`(3)` <= index`(2)`) // false
      index = i`(3)`
      fn = middleware[i`(3)`] // 此处fn应为undefined
      if (i`(3)` === middleware.length) *// true fn = next`(one=>next)`*  
      

fn(context, )
- 3种错误处理