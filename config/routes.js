var express = require('express');
var router = express.Router();

//Reqire controllers.
var userController = require('../controllers/usersController')


// root path:
router.route('/')
.get(usersController.home);

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
  .delete(usersController.destroy);

  module.exports = router
