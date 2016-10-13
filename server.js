var express = require('express');
// var server = require('http').createServer(app);
var path = require('path');
var url = require('url');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var io = require('socket.io')();
require('dotenv').config();

var routes = require('./config/routes');
// var users  = require('./routes/users');
var mongoose = require('./config/database');

var app = express();

// var httpServer = http.createServer(app);

//load and attach socket.io to http server
// var io = require('socket.io');
// io.listen(server);

// document.addEventListener('DOMContentLoaded', function(){
//
//   // get our connection to the socket.io server
//   var socket = io();
//   console.log(socket);
// })

// var coneectedUsers = {};
// var webSocket = io.listen(httpServer);
// var httpServer = http.createServer(app)
//
//
// webSocket.sockets.on('connection', function (socket){
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




app.set('socketio',io);


  // For serving static files inside ./client
app.use(require('express').static(__dirname + '/client'));

// For hosting on Heroku
// io.configure(function () {
//   io.set("transports", ["xhr-polling"]);
//   io.set("polling duration", 10);
//   io.set('log level', 1)
// })
// });






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(debugReq);

app.use('/', routes);
//won't need this below cause got rid of routes folder
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next){

// development error handler
// will print stacktrace
err = (app.get('env') === 'development')
? err : {};
res.status(err.status || 500);
res.json({
  message: err.message,
  error:err
  });
});

function debugReq(req, res, next) {
  debug('params:', req.params);
  debug('query:', req.query);
  debug('body:', req.body);
  next();
}
// production error handler
// no stacktraces leaked to user

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
