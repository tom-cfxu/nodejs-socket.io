//封装socket.io,为了获取server以便监听
var socketio = {};
var socket_io = require('socket.io');
var test = require('./routes/test.js')
//获取io
socketio.getSocketio = function (server) {
    var io = socket_io.listen(server);

    io.sockets.on('connection', function (socket) {
        console.log('连接成功!')
        setInterval(() => {
            socket.emit('event2', { data: global.data });
        }, 2000);
        socket.on('event1', function () {
            console.log('监听测试事件1');
            var datas = [1, 2, 3, 4, 5];
            // console.log(global.data)

            // socket.broadcast.emit('event2', { data: datas });
            console.log("event2发送成功!")
            // console.log(global.data)
        });
    })
}

module.exports = socketio;