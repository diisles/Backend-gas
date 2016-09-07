var express = require('express');
var router = express.Router();

//Reqire controllers.
var usersController = require('../controllers/usersController');
var driversController = require('../controllers/driversController')

// root path:
// router.route('/')
// .get(usersController.home);

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
    .delete(driversController.destroy);

  module.exports = router
