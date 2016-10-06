var express = require('express');
var router = express.Router();

//Reqire controllers.
var usersController = require('../controllers/usersController');
var driversController = require('../controllers/driversController');
var tripsController = require('../controllers/tripsController');
var socketController = require('../controllers/socketController');
// root path:
// router.route('/')
// .get(usersController.home);
//
// router.route('/login')
// .get(usersController.show);
// // .post(usersController)
//
// router.route('/signup')
// .post(usersController.create);

router.route('/users')
  //Get all users on map
  .get(usersController.index)
  //Post a new user
  .post(usersController.create);

router.route('/users/:id')
  // GET a specific user
  .get(usersController.show)
  // PATCH update existing user position
  .patch(usersController.update)
  //DELETE remove specific user from DB
  .delete(usersController.destroy)

  router.route('/drivers')
    //Get all drivers on map
    .get(driversController.index)
    //Post a new driver
    .post(driversController.create);

  router.route('/drivers/:id')
    // GET a specific driver
    .get(driversController.show)
    // PATCH update existing driver position
    .patch(driversController.update)
    //DELETE remove specific driver from DB
    .delete(driversController.destroy)

    router.route('/trips')
      //Get all trips on map
      .get(tripsController.index)
      //Post a new trip
      .post(tripsController.create);

    router.route('/trips/:id')
      // GET a specific trip
      .get(tripsController.show)
      // PATCH update existing trip position
      .patch(tripsController.update)
      //DELETE remove specific trip from DB
      .delete(tripsController.destroy);

  module.exports = router
