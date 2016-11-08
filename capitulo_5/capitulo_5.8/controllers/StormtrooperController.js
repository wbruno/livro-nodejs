function StormtrooperController() {}

StormtrooperController.prototype.getAll = function(request, response, next) {
  response.send('get all stormtroopers');
};
StormtrooperController.prototype.getById = function(request, response, next) {
  response.send('get a specific stormtrooper by id');
};
StormtrooperController.prototype.create = function(request, response, next) {
  response.send('create a new stormtroopers');
};
StormtrooperController.prototype.update = function(request, response, next) {
  response.send('update a stormtrooper');
};
StormtrooperController.prototype.remove = function(request, response, next) {
  response.send('remove a stormtrooper');
};
module.exports = new StormtrooperController();
