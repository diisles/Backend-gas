var User = require('../models/User');

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

  user.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate user b/c:' + error});

    response.json({user: user});
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

    if(request.body.title) user.title = request.body.title;
    if(request.body.priority) user.priority = request.body.priority;
    if(request.body.difficulty) user.difficulty = request.body.difficulty;
    if(request.body.isComplete) user.isComplete = request.body.isComplete;
    if(request.body.createdAt) user.createdAt = request.body.createdAt;
    if(request.body.updatedAt) user.updatedAt = request.body.updatedAt;
    if(request.body.completedOn) user.completedOn = request.body.completedOn;

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
}
