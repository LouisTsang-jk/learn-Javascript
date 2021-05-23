# WebRTC API

**WebRTC** (Web Real-Time Communications) 是一项实时通讯技术。建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。

## 底层原理

- ICE

  `Interactive Connectivity Establishment(ICE)`允许浏览器之间建立连接的协议框架。

- STUN

  `NAT`的会话穿越功能`Session Traversal Utilities for NAT()/STUN`是一个允许位于NAT后的客户端找出自己的公网地址，判断出路由器阻止直连的限制方法的协议。

  客户端通过给公网的STUN服务器发送请求获得自己的公网地址信息，以及是否能被访问。

  ![An interaction between two users of a WebRTC application involving a STUN server.](../../../img/index.assets/webrtc-stun.png)

- NAT

  网络地址转换协议`Network Address Translation(NAT)`用来给你的（私网）设备映射一个公网的IP地址的协议。

- TURN

  > 一些路由器使用「对称型NAT」的NAT模型，这种路由器只接受和对端先前建立的连接。（就是下一次请求建立新的连接映射）。

  `Traversal Using Realys around NAT(TURN)`NAT的中继穿越方式，通过TURN服务器中继所有数据的方式来绕过「对称型NAT」。需要在TURN服务器创建一个连接，然后告诉所有对端设备发包到服务器上，TURN服务器再把包转发给另一端。

  > 这种方式开销很大，所以只有在没有其他更好选择的情况采用。

- SDP

  会话描述协议`Session Description Protocol(SDP)`是用来描述多媒体连接内容的协议。「分辨率、格式、编码、加密算法」等。**本质上这些描述内容的元数据并不是媒体流本身（用于描述在设备之间共享媒体的连接）**。

