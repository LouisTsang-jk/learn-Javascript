# 跨域CORS
(跨资源共享访问Cross-origin resource sharing)
由同源策略(same origin policy)限制请求的场景。
## 同源策略
**同源策略**限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
> 1.
> 2.
> 3.
同源策略限制以下行为
> 1. Cookie、LocalStorage和IndexDB无法读取
> 2. DOM和JS对象无法获得
> 3. AJAX请求不能发送

# 解决跨域的方案
1. jsonp跨域
```
const script = document.createElement('script');
script.type = 'type/javascript';
script.src = 'http://www.xxx.com/test?type=normal&callback=handlerCallback';
document.head.appendChild(script);

function handlerCallback(){
  console.log(JSON.stringify(res));
}
```
缺点：只能get
2.