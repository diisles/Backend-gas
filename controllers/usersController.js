var User = require('../models/User');


// function home(request, response){
//   response.json({message:'api app'})
// }
// GET /api/users
function index(request, response) {
  User.find({}, function(error, users) {
    if(error) response.json({message: 'Could not find any users'});

    response.json({users: users});
  }).select('-__v');
}

// POST /api/users
function create(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var user = new User(request.body);

  user.save(function(error, user) {
    if(error){
      console.log(error);
      response.json({messsage: 'Could not ceate user b/c:' + error});
    } else {
      console.log(user)
      response.json({user: user});
    }

  });
}

// GET /api/users/:id
function show(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    response.json({user: user});
  }).select('-__v');
}

// PATCH /api/users/:id
function update(request, response) {
  console.log('in PATCH');
  console.log('body:',request.body);

  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    if(request.body.username) user.username = request.body.username;
    if(request.body.home_addy) user.home_addy = request.body.home_addy;
    if(request.body.work_addy) user.work_addy = request.body.work_addy;
    if(request.body.vehicles) user.vehicles = request.body.vehicles;
    if(request.body.email) user.email = request.body.email;
    if(request.body.password) user.password = request.body.password;
    if(request.body.tel) user.tel = request.body.tel;
    if(request.body.location) user.location = request.body.location;



    user.save(function(error) {
      if(error) response.json({messsage: 'Could not update user b/c:' + error});

      response.json({message: 'User successfully updated', user: user});
    });
  }).select('-__v');
}

// DELETE /api/criminals/:id
function destroy(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete user b/c:' + error});

    response.json({message: 'User successfully deleted'});
  }).select('-__v');
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
  // home: home
}
