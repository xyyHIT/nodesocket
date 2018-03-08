var net = require('net');
//模块引入
var listenPort = 3000;//监听端口
var server = net.createServer(function(client){
    //client.setEncoding('binary');
    //接收到数据
    client.on('data',function(data){
        console.log(client.remoteAddress + ' client send ===>' + data);
    });
    //client.write('Hello client!\r\n');
    //数据错误事件
    client.on('error',function(exception){
        console.log('socket error:' + exception);
        socket.end();
    });
    //客户端关闭事件
    client.on('close',function(data){
        console.log('client closed! ===>'+data);

        // socket.remoteAddress + ' ' + socket.remotePort);
    });
    client.on('end', function () {
        console.log('client end ');
    });
}).listen(listenPort);
//服务器监听事件
server.on('listening',function(){
    console.log("server listening:" + server.address().port);
});
//服务器错误事件
server.on("error",function(exception){
    console.log("server error:" + exception);
});
//服务器连接事件
server.on('connection', function (client) {
    console.log("server connection:" + client.remoteAddress);
});
