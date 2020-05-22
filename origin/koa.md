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
   */·

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

const f1 = async (ctx, next) => {
  console.log('one')
  await next();
  console.log('one-next');
}

const f2 = async (ctx, next) => {
  console.log('two')
  await next();
  console.log('two-next');
}

const f3 = async (ctx, next) => {
  console.log('three')
  await next();
  console.log('three-next');
}

app.use(f1)
app.use(f2)
app.use(f3)

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
- 核心(洋葱模型)
我理解这部分就是一个递归，执行f1函数的时候，可以分为三部分
```
f1-1. console.log('one')
f1-2. next()
  执行到next的时候其实是执行了下个中间件，即f2函数
  f2-1. console.log('two')
  f2-2. next()
    执行到next的时候其实是执行了下个中间件，即f3函数
    f2-1. console.log('three')
    f2-2. next()
    f2-3. console.log('three-next')
  f2-3. console.log('two-next')
f1-3. console.log('one-next')
```
其中很迷惑就是就是中间`fn = next`，我还没想懂这个什么时候会有赋值，因为我自己打印出来也是`undefined`
- 3种错误处理
1. `ctx.onerror`
中间件中的错误捕获
2. `app.on('error', (err) => {})`
最外层实例事件监听形式
3. `app.onerror = (err) => {}`
重写`onerror`