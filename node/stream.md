# 流「stream」
`Node`程序有两种缓存方式。
1. 所有数据接收完毕，一次性从缓存读取。
2. 数据流方式，收到一块数据就读取 一块，数据没有接收完成时就开始处理。
## Code
```
const fs = require('fs');
fs
  .createReadStream('./<file-name>');
  .pipe(process.stdout);
```
# 管道命令「pipe」
`数据流相当于把较大的数据拆分成小数据，一个命令部署了数据流接口，就可以把一个流的输出接到另一个流的输入。`
# 可读数据流
- 可读数据流接口，对外提供数据。
- 可写数据流接口，写入数据。
- 双向数据流接口，读写数据。「Tcp sockets、zlib、crypto」
## 状态
- 流动态
数据尽快地从数据源导向用户的程序。
- 暂停态
必须显式调用`stream.read()`，才会释放数据。   
刚新建的时候，`可读数据流`处于暂停态。
### 转换状态
- 暂停态 -> 流动态
1. 添加data事件的监听函数
2. 调用resume方法
3. 调用pipe方法将数据送往一个可写数据流
# 参考
(Stream接口-阮一峰)[https://javascript.ruanyifeng.com/nodejs/stream.html]