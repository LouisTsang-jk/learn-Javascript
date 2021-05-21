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

- TURN

- SDP

