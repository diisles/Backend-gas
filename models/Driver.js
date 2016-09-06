var mongoose = require('mongoose');

var DriverSchema = mongoose.Schema({
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  tier: {type:String}
  home_addy: {type:String, required:true},
  // last_name: {type:String, required:true},
  email: {type:String, required:true, unique:true},
  // password: {type:String, required:true, unique:true},
  tel: {type:String, required:true, unique:true}
  location: {Latitude:'', Longitude:''}
});

module.expotrs = mongoose.model('DriverSchema', DriverSchema)
