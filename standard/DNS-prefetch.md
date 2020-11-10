# DNS(Domain Name System)
# DNS Prefetching
浏览器根据自定义的规则，提前去解析后面可能用到的域名。
```
<link rel="dns-prefetch" href="//www.test.com">
```
> a标签的默认启动在HTTPS不起作用
```
<meta http-equiv="x-dns-prefetch-control" content="on">
```
(强制启动)