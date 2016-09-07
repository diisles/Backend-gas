var mongoose = require('mongoose');

var Driver = require('../models/Driver');
var Trip = require('../models/Trip');
var User = require('../models/User');
require('dotenv').config();
var database = require('./database');

var drivers = [
  {
    firstName: 'Manny',
    lastName: 'Robinson',
    tier: '91 Octane',
    home_addy: '1200 Nebraka ave, L.A.,90025',
    // last_name: {type:String, required:true},
    email: 'manny@gmail.com',
    // password: {type:String, required:true, unique:true},
    tel: 3104896224,
    location: { x: -118.490602, y: 34.016357,}
  },
  {
    firstName: 'John',
    lastName: 'McRoberts',
    tier: '91 Octane',
    home_addy: '1820 Iowa ave, L.A.,90025',
    // last_name: {type:String, required:true},
    email: 'John@gmail.com',
    // password: {type:String, required:true, unique:true},
    tel: 3106899922,
    location: { x: -118.498006, y: 34.020970,}
  },
  {
    firstName: 'Mike',
    lastName: 'Johnson',
    tier: '89 Octane',
    home_addy: '107 Wadely Way ave, SM.,90401',
    // last_name: {type:String, required:true},
    email: 'mike@gmail.com',
    // password: {type:String, required:true, unique:true},
    tel: 3102364426,
    location: { x: -118.491054, y: 34.011619,}
  }
]

var users = [
  {
    username: 'Allison Rogers',
    home_addy: '821 Peter Lane, SM, 90402',
    work_addy: '2122 Main st. L.A. 33133',
    vehicles: [{
      make:'Land Rover',
      model: 'Range Rover',
      color: 'Red',
      year: 2013,
      licensePlate: 'cosmo'
    }],
    // last_name: {type:String, required:true},
    email: 'allison@gmail.com',
    password: 'password',
    tel: 3108992323,
    location: { x: -118.496630, y: 34.021982}
  },
  {
    username: 'Desi',
    home_addy: '400 Georgia ave, L.A., 90049',
    work_addy: '1233 Hope st. L.A. 90003',
    vehicles: [{
      make:'Panitac',
      model: 'FireBird',
      color: 'Black',
      year: 1984,
      licensePlate: 'Gamer1'
    }],
    // last_name: {type:String, required:true},
    email: 'desi@gmail.com',
    password: 'password1',
    tel: 8184442255,
    location: { x: -118.487965, y: 34.032080}
  },
  {
    username: 'Kristen Kerry',
    home_addy: '8172 Barry ave, L.A., 90402',
    work_addy: '1414 Peter LN. L.A. 90210',
    vehicles: [{
      make:'Bmw',
      model: '760i',
      color: 'Silver',
      year: 2016,
      licensePlate: '27352ST'
    }],
    // last_name: {type:String, required:true},
    email: 'kristen@gmail.com',
    password: 'password2',
    tel: 3109992121,
    location: { x: -118.499877, y: 34.039907}
  }
]
  // var trip = [
  //   {
  //     user: ,
  //
  //   drivers: {
  //     type : mongoose.Schema.Types.ObjectId,
  //     ref  : 'Manny'
  //   },
  //   startPoint :{
  //     x: -118.490602,
  //     y: 34.016357,
  //   }
  //   emdPoint: {
  //     x: -118.499877,
  //     y: 34.039907
  //   }
  //   completed:{type:false},
  //
  //    users {  :
  //     type   : mongoose.Schema.Types.ObjectId,
  //     ref    : 'Desi'
  //     },
  //
  //     drivers: {
  //       type : mongoose.Schema.Types.ObjectId,
  //       ref  : 'John','McRoberts'
  //     },
  //     startPoint :{
  //       x: -118.498006,
  //       y: 34.020970,
  //     }
  //     emdPoint: {
  //       x: -118.487965,
  //       y: 34.032080
  //     },
  //     completed:{type:false},
  //
  //   }]







Driver.remove({}, function(err) {
  if (err) console.log(err);
  Driver.create(drivers, function(err, createdDrivers) {
    if (err) {
      console.log(err);
    } else {
      console.log(createdDrivers)
      console.log("Database seeded with " + createdDrivers.length + " drivers.");
    }
  });
});

User.remove({}, function(err) {
if (err) console.log(err);
User.create(users, function(err, users) {
 if (err) {
 console.log(err);
 } else {
 console.log("Database seeded with " + users.length + " users.");
 mongoose.connection.close();
 }
 process.exit();
});
});
// Trip.remove({}, function(err) {
// if (err) console.log(err);
// Trip.create(trips, function(err, trips) {
//  if (err) {
//  console.log(err);
//  } else {
//  console.log("Database seeded with " + trips.length + " trips.");
//  mongoose.connection.close();
//  }
//  process.exit();
// });
// });
