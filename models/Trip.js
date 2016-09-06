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
  startPoint : {
    latitude  : Number,
    longitude : Number
  },
  emdPoint: {
    latitude: Number,
    longitude:Number
  }
  completed:{type:false}
});

var Match = mongoose.model('Match', matchSchema);

module.exports = mongoose.model('Trip', TripSchema);
