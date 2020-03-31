# Axios
axios.js源码解读,自己也是第一次要完整看完一整个项目，老实说也不知道怎么去看，那就只能慢慢摸索了吧。  
目前思路是跟着文档的功能一个个走，然后再慢慢看没有涉及的部分。  
## 默认请求post和get
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
