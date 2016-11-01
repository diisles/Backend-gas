var Driver = require('../models/Driver');

// GET /api/drivers
function index(request, response) {
  console.log(Driver)
  Driver.find({}, function(error, drivers) {
    if(error) response.json({message: 'Could not find any drivers'});

    response.json({drivers: drivers});
  }).select('-__v');
}

// POST /api/driver
function create(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var driver = new Driver(request.body);

  driver.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate driver b/c:' + error});

    response.json({driver: driver});
  });
}

// GET /api/driver/:id
function show(request, response) {
  var id = request.params.id;

  Driver.findById({_id: id}, function(error, driver) {
    if(error) response.json({message: 'Could not find driver b/c:' + error});

    response.json({driver: driver});
  }).select('-__v');
}

// PATCH /api/driver/:id
function update(request, response) {
  console.log('in PATCH');
  console.log('body:',request.body);

  var id = request.params.id;

  Driver.findById({_id: id}, function(error, driver) {
    if(error) response.json({message: 'Could not find driver b/c:' + error});

    if(request.body.firstName) driver.firstName = request.body.firstName;
    if(request.body.lastName) driver.lastName = request.body.lastName;
    if(request.body.tier) driver.tier = request.body.tier;
    if(request.body.email) driver.email = request.body.email;
    if(request.body.tel) driver.tel = request.body.tel;
    if(request.body.location) driver.location = request.body.location;
    // if(request.body.completedOn) driver.completedOn = request.body.completedOn;

    driver.save(function(error) {
      if(error) response.json({messsage: 'Could not update driver b/c:' + error});

      response.json({message: 'Driver successfully updated', todo: todo});
    });
  }).select('-__v');
}

// DELETE /api/driver/:id
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
