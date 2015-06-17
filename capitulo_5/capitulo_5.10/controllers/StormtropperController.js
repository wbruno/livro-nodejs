function StormtropperController() {}

StormtropperController.prototype.getAll = function(request, response, next) {
  response.send('get all stormtroppers');
};
StormtropperController.prototype.getById = function(request, response, next) {
  response.send('get a specific stormtropper by id');
};
StormtropperController.prototype.create = function(request, response, next) {
  response.send('create a new stormtroppers');
};
StormtropperController.prototype.update = function(request, response, next) {
  response.send('update a stormtropper');
};
StormtropperController.prototype.remove = function(request, response, next) {
  response.send('remove a stormtropper');
};
module.exports = new StormtropperController();
