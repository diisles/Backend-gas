var Todo = require('../models/Drivers');

// GET /api/todos
function index(request, response) {
  Driver.find({}, function(error, drivers) {
    if(error) response.json({message: 'Could not find any drivers'});

    response.json({drivers: drivers});
  }).select('-__v');
}

// POST /api/todos
function create(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var driver = new Driver(request.body);

  driver.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate driver b/c:' + error});

    response.json({driver: driver});
  });
}

// GET /api/todos/:id
function show(request, response) {
  var id = request.params.id;

  Driver.findById({_id: id}, function(error, driver) {
    if(error) response.json({message: 'Could not find driver b/c:' + error});

    response.json({driver: driver});
  }).select('-__v');
}

// PATCH /api/todos/:id
function update(request, response) {
  console.log('in PATCH');
  console.log('body:',request.body);

  var id = request.params.id;

  Driver.findById({_id: id}, function(error, driver) {
    if(error) response.json({message: 'Could not find driver b/c:' + error});

    if(request.body.title) driver.title = request.body.title;
    if(request.body.priority) driver.priority = request.body.priority;
    if(request.body.difficulty) driver.difficulty = request.body.difficulty;
    if(request.body.isComplete) driver.isComplete = request.body.isComplete;
    if(request.body.createdAt) driver.createdAt = request.body.createdAt;
    if(request.body.updatedAt) driver.updatedAt = request.body.updatedAt;
    if(request.body.completedOn) driver.completedOn = request.body.completedOn;

    driver.save(function(error) {
      if(error) response.json({messsage: 'Could not update driver b/c:' + error});

      response.json({message: 'Driver successfully updated', todo: todo});
    });
  }).select('-__v');
}

// DELETE /api/criminals/:id
function destroy(request, response) {
  var id = request.params.id;

  Driver.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete driver b/c:' + error});

    response.json({message: 'Driver successfully deleted'});
  }).select('-__v');
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
