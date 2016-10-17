// var Socket = require('../models/Socket');

module.exports =
function(io){
  routes.index = function(req, res, next){
  // got this next line from http://stackoverflow.com/questions/25700737/nodejs-access-socket-io-instance-in-express-routes-files
  io.sockets.emit();
  res.render('/');
 };
  return routes;
};


// function(io){ index(request, response, next)
//   io.sockets.emit();
//   User.find({}, function(error, users) {
//       if(error) response.json({message: 'Could not find any users'});
//
//       response.json({users: users});
//     }).select('-__v');
//
// };





//
//  module.exports = {
//   home: home
// };











// var coneectedUsers = {};
// var io = require('socket.io')();
// var webSocket = io.listen(httpServer);
// var httpServer = http.createServer(app);
//
//
// io.on('connection', function (socket){
//
//
// socket.on('join', function(user, sendKey){
//   user.key = Date.now();
//   socekt.set('userKey', user.key);
//   sendKey(user.key);
//
//   connectedUsers[user.key] = user;
//   socket.broadcast.emit('user connected', user);
// });
//
// socket.on('message', function(msg){
//   socket.get('userkey', function(err, key){
//     var user = connectedUsers[key];
//     if(user){
//       var data = {
//         key : key,
//         sender : user.name,
//         message : msg
//       };
//       socket.broadcast.emit('new chat msg',data);
//     }
//   });
// });
//
//
//   console.log('Client connected to socket.io!')
//
//   socket.on('send location', function(data){
//     socket.get('userkey', function(err, key){
//       var user = connectedUsers[key];
//       if(user) {
//         user.lat = data.lat;
//         user.lng = data.lng;
//         data.name = user.namedata.key = key;
//         io.sockets.emit('locatoin update', data);
//       }
//     });
//     // io.sockets.emit('location', data);
//   });
//
//   socket.on('request locations', function(sendData){
//     sendData(connectedUsers);
//   });
//
// socket.on('disconnect', function(){
//   socket.get('userkey', function(err, key){
//     var userInfo = connectdUsers[key];
//     if(userInfo) {
//       delete connectedUsers[key];
//       socket.broadcast.emit('user disconnected', key);
//     }
//   });
// });
//
//
//
//
//
//
//   module.exports = socketController;

  // For serving static files inside ./client
// app.use(require('express').static(__dirname + '/client'));
//
// // For hosting on Heroku
// io.configure(function () {
//   io.set("transports", ["xhr-polling"]);
//   io.set("polling duration", 10);
//   io.set('log level', 1)
// })
