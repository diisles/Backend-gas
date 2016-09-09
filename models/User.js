var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {type:String, required:true},
  home_addy: {type:String},
  work_addy: {type:String},
  vehicle: {make:String, model: String, color:String, year:Number, licensePlate: String},

  email: {type:String, required:true},
  password: {type:String, required:true},
  // tel: {type:String, required:true, unique:true},
  tel: {type:String, unique:true},
  location: { x: Number, y: Number}
});





module.exports = mongoose.model('User', UserSchema);
