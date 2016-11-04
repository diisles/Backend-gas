var mongoose = require('mongoose');

var DriverSchema = mongoose.Schema({
  firstName: {type:String, required:false},
  lastName: {type:String, required:false},
  tier: {type:String, required:false},
  // home_addy: {type:String, required:true},
  // last_name: {type:String, required:true},
  email: {type:String, required:false},
  // password: {type:String, required:true, unique:true},
  tel: {type:String, required:false, unique:false},
  location:{ x: Number ,  y: Number}
});

module.exports = mongoose.model('Driver', DriverSchema)
