# JavaScript 异步编程

## 1. 回调函数
```
function bar(callback){
  setTimeout(()=>{
    callback();
  },3000)
}
```
`优点：`
简单，容易理解
`缺点：`
高度耦合、每个函数只能用一个回调函数
## 2. 