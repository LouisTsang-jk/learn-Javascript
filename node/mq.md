# mq「消息队列」
当服务器要处理一堆客户端发起的请求，先让这些请求在一个池中去排队，然后根据先进先出的规则处理「队列」。
## 优势
- 应用解耦
- 灵活性&峰值处理
- 排序保证
- 异步通信
- 可扩展性
## 主流的消息队列
- Kafka
- RocketMQ
- RabbitMQ
## 概念
- 生产者
产生(生成)消息
- 消费者
处理(接收)消息
- 通道「channel」
建立连接之后会获取到一个通道「channel」
- 交换机「exchange」
消息需要先发送到交换机「exchange」
- 消息队列
消息到达消费者前一刻存储消息的地方
- 回执「ack」
# 参考
[](https://juejin.im/post/5dd8cd7ae51d4523501f7331?utm_source=gold_browser_extension)