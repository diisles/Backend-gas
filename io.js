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
