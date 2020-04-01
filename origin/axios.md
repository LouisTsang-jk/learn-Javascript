# Axios
`axios.js`源码解读,自己也是第一次要完整看完一整个项目，老实说也不知道怎么去看，那就只能慢慢摸索了吧。  
目前思路是跟着文档的功能一个个走，然后再慢慢看没有涉及的部分。  
为什么选`Axios`呢，首先这个平常项目用得比较多，相对也比较熟悉，`Node`和`Browser`环境下都能使用，还有就是整个项目相对于`Vue`这种小很多，用来上手应该还是比较适合的。
## 默认请求get
get
```
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
阅读`/lib/axios.js`  
```
var axios = createInstance(defaults);
```
可以看到`axios`这个实例是由`createInstance`函数返回的，看名字和注视得知这里是返回一个新的`Axios`实例，`defaults`则是由另外一个文件`/lib/defaults.js`，这个是实例的默认配置。  
继续看`createInstance`函数  
```
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}
```
这里创建了一个`Axios`的对象实例，跳到`/lib/core/Axios.js`  
```
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
```
这里的`interceptors`应该是我们平常用很多的拦截器了，拦截器由分了*请求*和*返回*的拦截器，这里分别由创建了`InterceptorManager`的对象实例。  
先不关注后面关于拦截器，回归到这个默认的get请求，这里的`axios`就是上面生成的默认配置的`Axios`实例，接下来继续看`Axios`对象的`get`方法。
跳到`/lib/core/Axios.js`
```
// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
```
跳到`/lib/core/InterceptorManager.js`  
```
function InterceptorManager() {
  this.handlers = [];
}
```
看注释这里是一个存放`拦截器(interceptor)`的一个`栈(Stack)`
## 默认请求post
post
```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 并发请求
```
