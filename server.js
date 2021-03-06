var express = require('express');

var path = require('path');
var url = require('url');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var debug = require('debug')('api:server');
// var io = require('socket.io')();
require('dotenv').config();

var routes = require('./config/routes');
// var users  = require('./routes/users');
var mongoose = require('./config/database');

var app = express();
// var httpServer = http.createServer(app);



//////////this code below is not needed cause I have now set up a proxy server to handle the cors issue.
//////////

// app.get('/api/endpoint',  function(req,res){
//   res.send(result)
//   console.log('Got a request from host:', req.hostname, 'Origin:', req.headers.origin)
// })

// app.set('socketio',io);


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

app.all('*', function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  next();
});
app.use(cors({
  credentials: false,
  origin: true
}));

// app.get('/', function(req,res,next){
//   res.json({msg: 'This is Cors-enabled for all origins!'});
// });


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
