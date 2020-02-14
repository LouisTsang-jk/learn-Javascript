# AJAX
## URL
统一资源定位符（Uniform Resource Locator）  
一个给定的独特资源在Web上的地址。理论上说，每个有效的URL都指向一个独特的资源。
组成：
`http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument`
1. `http://`(协议)
表明了浏览器必须使用何种协议
> + http
> + https
> + ftp
> + mailto
2. `www.example.com`(域名)  
表明正在请求哪个Web服务器
3. `:80`端口
表示用于访问Web服务器上的资源的技术“门”  
> + 80 
> + 443
4. `/path/to/myfile.html`(路径)  
是网络服务器上资源的路径
5. `?key1=value1&key2=value2`(参数)  
是提供给网络服务器的额外参数  
6. `#SomewhereInTheDocument`(锚点)
资源本身的另一部分的锚点，锚点表示资源中的一种“书签”，给浏览器显示位于该“加书签”位置的内容的方向。*＃后面的部分（也称为片段标识符）从来没有发送到请求的服务器。*