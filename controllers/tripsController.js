var Trip = require('../models/Trip');

// GET /api/trips
function index(request, response) {
  Trip.find({}, function(error, trips) {
    if(error) response.json({message: 'Could not find any trips'});

    response.json({trips: trips});
  }).select('-__v');
}

// POST /api/trips
function create(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var trip = new Trip(request.body);

  trip.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate trip b/c:' + error});

    response.json({trip: trip});
  });
}

// GET /api/trips/:id
function show(request, response) {
  var id = request.params.id;

  Trip.findById({_id: id}, function(error, trip) {
    if(error) response.json({message: 'Could not find trip b/c:' + error});

    response.json({trip: trip});
  }).select('-__v');
}

// PATCH /api/trips/:id
function update(request, response) {
  console.log('in PATCH');
  console.log('body:',request.body);

  var id = request.params.id;

  Trip.findById({_id: id}, function(error, trip) {
    if(error) response.json({message: 'Could not find trip b/c:' + error});

    if(request.body.users) trip.users = request.body.users;
    if(request.body.drivers) trip.drivers = request.body.drivers;
    if(request.body.startPoint) trip.startPoint = request.body.startPoint;
    if(request.body.endPoint) trip.endPoint = request.body.endPoint;
    if(request.body.completed) trip.completed = request.body.completed;
    // if(request.body.updatedAt) trip.updatedAt = request.body.updatedAt;
    // if(request.body.completedOn) trip.completedOn = request.body.completedOn;

    trip.save(function(error) {
      if(error) response.json({messsage: 'Could not update trip b/c:' + error});

      response.json({message: 'Trip successfully updated', trip: trip});
    });
  }).select('-__v');
}

// DELETE /api/criminals/:id
function destroy(request, response) {
  var id = request.params.id;

  Trip.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete trip b/c:' + error});

    response.json({message: 'Trip successfully deleted'});
  }).select('-__v');
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
