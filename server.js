var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

require('dotenv').config();

var routes = require('./config/routes');
// var users  = require('./routes/users');
var mongoose = require('./config/database')

var app = express();

// document.addEventListener('DOMContentLoaded', function(){
//
//   // get our connection to the socket.io server
//   var socket = io();
//   console.log(socket);
// })

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
