# TCP
TCP协议的运行分为三个阶段
## 1. 连接创建(connection establishment)
TCP用*三次握手(three-way handshake)*过程创建一个连接。连接创建过程中，很多参数需要初始化来保证`按序`传输和连接的强壮型。  
通常是有一端打开一个`套接字(socket)`然后监听来自另一方的连接，这就是`被动打开(passive open)`。服务器端被被动打开之后，用户端就可以创建`主动打开(active open)`。
1. 客户端通过向服务端发送一个`SYN`来创建一个`主动打开`，作为三次握手的一部分。客户端将这段连接的序号设定为随机数A。
> `SYN`：同步序列编号(Synchronize Sequence Numbers)。是TCP/IP建立连接时使用的握手信号。  
> `seq`：序列号  
作用：  
服务端可知 -> `客户端的发送能力和服务端的接收能力正常`。
2. 服务器端应为一个合法的`SYN`回送一个`SYN/ACK`。`ACK`的确认码应为A+1，`SYN/ACK`包本身又有一个随机产生的序号B。
> `SYN/ACK`：服务器用来表示接收到了这个信息  
**注意此处`SYN`和`ACK`在一个报文内发送*  
作用：  
客户端可知 -> `服务端的发送能力和客户端的接收能力正常`和 `客户端的发送能力和服务端的接收能力正常`。
3. 最后，客户端再发送一个`ACK`。此时包的序号被设定为`A+1`，而`ACK`的确认码则为B+1。当服务端收到这个`ACK`的时候，就完成了三次握手，并进入了连接创建状态。
> `ACK`：表示响应  
作用：
客户端可知 -> `服务端的发送能力和客户端的接收能力正常`
## 2. 数据传送(data transfer)
### 可靠性&强壮性的措施
1. 使用序号，对收到的TCP报文段进行排序以及检测重复的数据；
2. 使用校验和检测报文段的错误，即无错传输；
3. 使用确认和计时器来检测和纠正丢包或延时；
4. 流控制(Flow control)；
5. 拥塞控制(congestion control)；
6. 丢失包的重传；

## 3. 连接终止(connection termination)
四次挥手：
1. 主动关闭方发送一个`FIN`，序号设定为随机数C，用来关闭主动放到被动关闭方的数据传输。*此时主动关闭方还可以接受数据*。(如果`FIN`之前发送的数据，没有收到对应的`ACK`确认报文，则主动方依旧回重发这些数据)。
2. 被动关闭方接受到`FIN`之后，发送一个`ACK`给对方，确认序号为收到序号C+1。
3. 被动关闭方发送一个`FIN`，用来关闭被动关闭方到主动关闭方的数据传送，序号设定为随机数D
**`ACK`和`FIN`分开发送*，收到`FIN`仅表示对方关闭数据通道，停止发送数据。己方的数据通道则需要上层应用决定。
4. 主动关闭方收到`FIN`之后，发送一个`ACK`给被动关闭方，确认序号为D+1，完成四次挥手。

# 浏览器中输入URL之后执行的过程
访问www.domain.com
1. 客户端浏览器通过DNS解析到`www.domian.com`的IP地址xxx.xxx.xxx.xxx，通过IP地址找到客户端到服务器的路径。客户浏览器发起一个HTTP会话到xxx.xxx.xxx.xxx，然后通过TCP协议封装数据包，输入到网络层。
2. 在客户端的*传输层*添加TCP头，将HTTP会话请求分成报文段，添加源和目的端口。如服务器使用80端口监听客户端的请求，客户端则由系统随机选择一个端口与服务器进行交换。
3. 客户端的*网络层*(添加IP头)，主要通过查询路由表确定如何到达服务器。
4. 客户端的*链路层*(添加MAC头)，包通过链路层发送到路由器，通过邻居协议查找到指定IP地址的MAC地址，然后发送ARP请求查找目的地址。

# TCP和UDP
传输层的两个协议
## 功能
1. 复用：在发送端，多个应用程序共用一个传输层。
2. 分用：在接收端，传输层根据端口号将数据分给不同的应用程序。
## UDP
1. 无连接
2. 不可靠
3. 面向报文
4. 没用拥塞控制，始终以恒定速率发送数据
5. 支持一对一、一对多、多对一、多对多
6. 首部开销小(8字节)
## TCP 
1. 有连接
2. 可靠的
3. 面向字节流
4. 全双工通信
5. 连接两端只能是两个端点，只能一对一
6. 首部开销大(20字节)

# 套接字
一条TCP连接的两端就是两个套接字
套接字 = IP地址 ： 端口号
TCP连接 = (套接字1, 套接字2) = (IP1: 端口号1, IP2: 端口号2)

# 状态码
+ 1xx -> 信息性状态码 -> 接受的请求正在处理
+ 2xx -> 成功状态码 -> 请求处理完毕
+ 3xx -> 重定向状态码 -> 需要进行附加操作以完成请求
+ 4xx -> 客户端错误状态码状态码 -> 服务器无法处理请求
+ 5xx -> 服务器错误状态码 -> 服务器处理请求出错

# WebSocket和HTTP
HTTP、WebSocket 等应用层协议，都是基于 TCP 协议来传输数据的，我们可以把这些高级协议理解成对 TCP 的封装。既然大家都使用 TCP 协议，那么大家的连接和断开，都要遵循 TCP 协议中的三次握手和四次握手 ，只是在连接之后发送的内容不同，或者是断开的时间不同。

对于 WebSocket 来说，它必须依赖 HTTP 协议进行一次握手 ，握手成功后，数据就直接从 TCP 通道传输，与 HTTP 无关了。
# 参考
[nodejs的websocket的服务器如何实现？](https://www.zhihu.com/question/37647173/answer/1403359896a)