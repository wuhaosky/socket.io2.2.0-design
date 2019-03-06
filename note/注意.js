注意：
Socket.IO不是websocket的实现，Socket.IO确实在可能的情况下使用websocket作为传输，它向每个包添加一些元数据：包类型、名称空间和需要消息确认时的ack id。
这就是为什么websocket客户端无法成功连接Socket.IO服务器，Socket.IO客户端无法成功连接websocket服务器的原因。
Socket.IO的协议请看https://github.com/socketio/socket.io-protocol。