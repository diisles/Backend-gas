var mongoose = require('mongoose');
var User = require('./User.js').schema;
var Driver = require('./Driver.js').schema;

var TripSchema = new mongoose.Schema({
  users  : {
  type   : mongoose.Schema.Types.ObjectId,
  ref    : 'User'
  },

  drivers: {
    type : mongoose.Schema.Types.ObjectId,
    ref  : 'Driver'
  },
  startPoint : {
    x: Number,
    y: Number
  },
  emdPoint: {
    x: Number,
    y: Number
  },
  completed:{type:false}
});

// var Match = mongoose.model('Match', matchSchema);

module.exports = mongoose.model('Trip', TripSchema);
