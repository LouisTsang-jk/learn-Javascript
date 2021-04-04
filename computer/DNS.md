# DNS
域名系统（Domain Name System）
# 工作流程
浏览器进程调用操作系统，如linux GNU glibc标准库的`gethostbyname`函数，通过网卡向DNS服务器发送UDP请求，接收节后返回给浏览器。
> 执行`gethostbyname`函数之前会判断是否命中DNS缓存
> `gethostbyname`函数在DNS解析前先检查域名本地Hosts中是否存在，若无则请求DNS服务器
# 注意
*DNS解析中除了使用UDP(域名解析)还有使用TCP(区域传送「zone transfer」)*   

DNS的规范中规定了2种类型的DNS服务器

- 主DNS服务器

  在一个区中主DNS服务器从自己本机的数据文件中读取该区的DNS数据信息

- 辅助DNS服务器

  从区的主DNS服务器中读取该区的DNS数据信息，当一个辅助DNS服务器启动时，它需要与主DNS服务器通信并加载信息，这就是区传输(zone transfer)。

# 参考
[面试官:讲讲DNS的原理？](https://zhuanlan.zhihu.com/p/79350395)
