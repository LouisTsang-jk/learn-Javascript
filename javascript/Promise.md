# Promise
`Promise`对象用于表示一个异步操作的最终完成(或失败)，及其结果值。  
本质上`Promise`是一个函数返回的对象，我们可以在其上面绑定回调函数，避免在初始阶段将回调函数作为参数传入函数。
## 状态
- pending
- resolve
- reject
## Demo
callback
```
function successCallback(result) {
  console.log('success:', result);
}
function failureCallback(result) {
  console.log('failure:', result);
}
createAudioFileAsync(audioSettings, successCallback, failureCallback);
```
promise
```
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
```
or
```
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```
## 链式调用
通过`Promise链`完成多个异步操作(上一个操作执行完成之后，开始下一个的操作，并带着上一步操作所返回的结果)。
## Catch的后续链式操作
回调失败之后可能会需要继续使用链式操作。使用`catch`在操作抛出失败之后再次进行新的操作。
```
new Promise((resolve, reject) => {
  console.log('init');
  resolve();
}).then(() => {
  throw new Error('something error');
  console.log('run here A');
}).catch(() => {
  console.log('run here B');
}).then(() => {
  console.log('run here C'); // ignore above answer
})
```
## Promise.all()
返回一个`Promise`实例，此实例在`iterable`参数内所有的`promise`都`resolved`或参数中不包含`promise`时回掉完成(`resolve`)；  
当其中一个`promise`失败`rejected`，此实例回调失败(`reject`)，失败原因将是第一个失败`promise`的结果。
### 参数 「iterable」
一个可迭代对象，如`Array`或`String`
## Promise.race()

## Promise.resolve()
返回一个以给定值解析后的`Promise`对象。
- 如果这个值是个`promise`，那么将返回这个`promise`;
- 如果这个值是`thenable`(即带有`then`方法)，返回的`promise`会跟随这个`thenable`的对象
```
const promise1 = Promise.resolve(123);
await promise1
// => 123
```

## Polyfill
```
new Promise( function(resolve, reject) {...} /* executor */ ).then(res => {  }).catch(err => {  });
```
- Promise构造函数执行时立即调用`executor`函数
- `resolve`/`reject`函数被调用时，分别将promise的状态改为`fulfilled(完成)`/`rejected(失败)`
```
class Promise {
  constructor (executor) {
    this.status = 'pending'; // pending&fulfilled&rejected
    this.res = null; // resolve return value
    this.err = null; // reject return value
    // resolve
    const resolve = res => {
      if (this.status === 'pending') {
        this.res = res;
        this.status = 'resolved';
      }
      if (this.status === 'pending') {
        this.err = err;
        this.status = 'rejected'
      }
    }
    // reject
    const reject = err => {}
    executor(resolve, reject);
  }
}
```



```
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
function _Promise (fn) {
  const _this = this;
  this.status = PENDING;
  this.value = null;
  this.reson = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];
  function resolve (value) {
    if (_this.status === PENDING) {
      _this.status = RESOLVED;
      _this.value = value;
      _this.resolvedCallbacks.map(cb => cb(value));
    }
  }
  function reject (reason) {
    if (_this.status === PENDING) {
      _this.status = REJECTED;
      _this.reason = reason;
      _this.rejectedCallbacks.map(cb => cb(reason));
    }
  }
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e)
  }
}
_Promise.prototype.then = function (onFullfilled, onRejected) {
  const _this = this;
  if (_this.status === PENDING) {
    _this.resolvedCallbacks.push(onFullfilled);
    _this.rejectedCallbacks.push(onRejected);
  }
  if (_this.status === RESOLVED) {
    onFullfilled(_this.value);
  }
  if (_this.status === REJECTED) {
    onFullfilled(_this.reason);
  }
}
```