var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {type:String, required:true},
  home_addy: {type:String},
  work_addy: {type:String},
  vehicles: {make:String, model: String, color:String, year:Number, licensePlate: String, required:true},
  // last_name: {type:String, required:true},
  email: {type:String, required:true, unique:true},
  password: {type:String, required:true, unique:true},
  tel: {type:String, required:true, unique:true},
  location: {Latitude:'', Longitude:''}
});





module.exports = mongoose.model('User', UserSchema);
