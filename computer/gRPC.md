# gRPC
A high-performance, open-source universal RPC framework「remote procedure call远程过程调用」提供一套机制，使得应用程序之间通信，遵循`server/client`模型。

![图1](../img/gRPC.assets/grpc_concept_diagram_00.png)

#### gRPC & Restful API

相同：

1. 提供一套通信机制
2. Server/Client模型通信
3. 使用http作为底层协议,*gRPC使用http2.0*

差异：

1. gPRC通过`protobuf`定义接口，拥有更加严格的接口约束条件。**同时`protobuf`可以将数据序列化为二进制编码，大幅度减少需要传输的数据量，从而提高性能。**

   > [protobuf详细](./Protobuf.md)

2. gPRC支持流式通信

   > 理论http2.0就可以使用streaming模式，但是通常web服务的`restful api`很少使用，通常的流式数据应用如视频流，一般使用专门的协议(HLS，RTMP)等





## 参考

[](https://www.jianshu.com/p/9c947d98e192)

[开源中国-gRPC官方文档](http://doc.oschina.net/grpc?t=60135#client)