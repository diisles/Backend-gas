var mongoose = require('mongoose');

// var env = require('./environment');


// Use different databse URIs based on whether an env or var exists.
var dbUri = process.env.MONGODB_URI ||
        "mongodb://localhost/" + process.env.LOCAL_DB;

if (!process.env.MONGODB_URI) {
    // check that MongoDB is running ..
    require('net').connect(27017, 'localhost').on('error', function(){
      console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
      process.exit(0);
    });
  }

mongoose.connect(dbUri);

module.exports = mongoose;
