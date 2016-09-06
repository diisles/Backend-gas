var mongoose = require('mongoose');

var TripSchema = new mongoose.Schema({
  users  : {
  type   : mongoose.Schema.Types.ObjectId,
  ref    : 'User'
  },

  drivers: {
    type : mongoose.Schema.Types.ObjectId,
    ref  : 'Driver'
  },
  midpoint : {
    latitude  : Number,
    longitude : Number
  }
});

var Match = mongoose.model('Match', matchSchema);

module.exports = mongoose.model('Trip', TripSchema);
