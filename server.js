var express = require('express');
var WebSocketServer = new require('ws');
var fs=require("fs");

var app = express();
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(3000);
console.log('Server started!');

// подключенные клиенты
var clients = {};

// WebSocket-сервер на порту 8080
var webSocketServer = new WebSocketServer.Server({
  port: 8080
});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);
  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);

    for (var key in clients) {
      clients[key].send(message);
    }
	fs.writeFileSync("task.txt", "task: "+ message,  "ascii");
  });

  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });
});