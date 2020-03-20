# 开放式系统互联模型(OSI)
Open Systems Interconnection Reference Model 
|层次|名字|
|-|-|
|第七层|应用层|
|第六层|表达层|
|第五层|会话层|
|第四层|传输层|
|第三层|网络层|
|第二层|数据链路层|
|第一层|物理层|

## 应用层(Application Layer)
提供为应用软件而设的借口，设置与另一应用软件之间的通信。  
如：HTTP、HTTPS、FTP、TELNET、SSH、SMTP、POP3、HTML等。

## 表达层(Presentation Layer)
把数据转换为能与接受者的系统格式兼容并适合传输的格式。

## 会话层(Session Layer)
负责在数据传输中设置和维护计算机网络中的两台计算机之间的通信连接。

## 传输层(Transport Layer)
把`传输表头(TH)`加至数据以形成数据包。传输表头包含了所使用的协议等发送信息。  
如：TCP

## 网络层(Network Layer)
决定数据的路径选择和转寄，将`网络表头(NH)`加至数据包，以形成报文。网络表头包含了网络数据。  
如：互联网协议(IP)
## 数据链路层(Data Link Layer)
负责网络寻址、错误侦测和改错

## 物理层(Physical Layer)
在局部局域网上传送`数据帧(Data Frame)`，它负责管理电脑通信设备和网络媒体之间的互通。  
包括：针脚、电压、线缆规范、集线器、中继器、网卡、主机接口卡。