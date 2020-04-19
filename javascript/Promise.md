# Promise
`Promise`对象用于表示一个异步操作的最终完成(或失败)，及其结果值。  
本质上`Promise`是一个函数返回的对象，我们可以在其上面绑定回调函数，避免在初始阶段将回调函数作为参数传入函数。
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