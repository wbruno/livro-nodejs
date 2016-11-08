var debug = require('debug')('livro_nodejs:controller');
var Promise = require('bluebird');

var handleNotFound = function(data) {
  if(!data) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};
function StormtrooperController(StormtrooperModel) {
  this.model = Promise.promisifyAll(StormtrooperModel);
}

StormtrooperController.prototype.getAll = function(request, response, next) {
  this.model.findAsync({})
    .then(function(data) {
      response.json(data);
    })
    .catch(next);
};
StormtrooperController.prototype.getById = function(request, response, next) {
  var _id = request.params._id;
  this.model.findOneAsync(_id)
    .then(handleNotFound)
    .then(function(data) {
      response.json(data);
    })
    .catch(next);
};
StormtrooperController.prototype.create = function(request, response, next) {
  var body = request.body;
  this.model.createAsync(body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};
StormtrooperController.prototype.update = function(request, response, next) {
  var _id = request.params._id,
      body = request.body;
  this.model.updateAsync(_id, body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};
StormtrooperController.prototype.remove = function(request, response, next) {
  var _id = request.params._id;
  this.model.removeAsync(_id)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};
module.exports = function(StormtrooperModel) {
  return new StormtrooperController(StormtrooperModel);
};

