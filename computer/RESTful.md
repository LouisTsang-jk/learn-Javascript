# RESTful

REST表示「Representational State Transfer」

- 资源(Resources)

所谓`资源`，就是网络上的实体或者说网络上的具体信息。可以是一段文本、图片、歌曲等…可以使用URI(统一资源定位符)指向。要获取资源访问对应的URI即可。

- 表现层(Representation)

`资源`是一种信息实体，把`资源`具体呈现的形式就叫做它的表现层。如文本可以使用`txt`，也可以是`html`，`xml`，`json`甚至采用二进制格式。

- 状态转换(State Transfer)

互联网通信协议HTTP协议是无状态协议，意味着所有状态保存在服务器端。如果客户端想操作服务器则通过某种手段使服务器端发生“状态转化”。客户端用到的手段只能是HTTP协议。

	1. GET获取资源
 	2. POST新建/更新资源
 	3. PUT更新资源
 	4. DELETE删除资源



# 参考

[阮一峰-理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)