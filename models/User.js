var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {type:String, required:false},
  home_addy: {type:String},
  work_addy: {type:String},
  vehicle: {make:String, model: String, color:String, year:Number, licensePlate: String},

  email: {type:String, required:false},
  password: {type:String, required:false},
  // tel: {type:String, required:true, unique:true},
  tel: {type:String, unique:false, required:false},
  lat: { type: String},
  longt: {type: String}
});





module.exports = mongoose.model('User', UserSchema);
