
// var coneectedUsers = {};
// var io = require('socket.io-client')();
// var webSocket = io.listen(httpServer);
//
//
//
// webSocket.sockets.on('connection', function (socket){
//
//
// webSocket.on('join', function(user, sendKey){
//   user.key = Date.now();
//   webSocekt.set('userKey', user.key);
//   sendKey(user.key);
//
//   connectedUsers[user.key] = user;
//   webSocket.broadcast.emit('user connected', user);
// });
//
// webSocket.on('message', function(msg){
//   webSocket.get('userkey', function(err, key){
//     var user = connectedUsers[key];
//     if(user){
//       var data = {
//         key : key,
//         sender : user.name,
//         message : msg
//       };
//       webSocket.broadcast.emit('new chat msg',data);
//     }
//   });
// });
//
//
//   console.log('Client connected to socket.io!')
//
//   webSocket.on('send location', function(data){
//     webSocket.get('userkey', function(err, key){
//       var user = connectedUsers[key];
//       if(user) {
//         user.lat = data.lat;
//         user.lng = data.lng;
//         data.name = user.namedata.key = key;
//         io.webSockets.emit('locatoin update', data);
//       }
//     });
//     // io.sockets.emit('location', data);
//   });
//
//   webSocket.on('request locations', fucntion(sendData){
//     sendData(connectedUsers);
//   });
//
// webSocket.on('disconnect', function(){
//   webSocket.get('userkey', function(err, key){
//     var userInfo = connectdUsers[key];
//     if(userInfo) {
//       delete connectedUsers[key];
//       webSocket.broadcast.emit('user disconnected', key);
//     }
//   });
// });
//
//
//
//
//
//
//   module.exports = io;
//
//   // For serving static files inside ./client
// app.use(require('express').static(__dirname + '/client'));
//
// // For hosting on Heroku
// io.configure(function () {
//   io.set("transports", ["xhr-polling"]);
//   io.set("polling duration", 10);
//   io.set('log level', 1)
// })
// });
=======
var io = require('socket.io')();

io.on('connection', function (socket){
  console.log('Client connected to socket.io!')
  socket.on('location', function(data){
    io.sockets.emit('location', data);
  });
  module.exports = io;

  // For serving static files inside ./client
app.use(require('express').static(__dirname + '/client'));

// For hosting on Heroku
io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
  io.set('log level', 1)
})
});
 module.exports = io;
>>>>>>> master
