var debug = require('debug')('livro_nodejs:controller');
function StormtropperController(StormtropperModel) {
  this.model = StormtropperModel;
}

StormtropperController.prototype.getAll = function(request, response, next) {
  this.model.find({}, function(err, data) {
    if(err) {
      return next(err);
    }
    response.json(data);
  });
};
StormtropperController.prototype.getById = function(request, response, next) {
  var _id = request.params._id;
  this.model.findOne(_id, function(err, data) {
    if(err) {
      return next(err);
    }
    if(!data) {
      var err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    response.json(data);
  });
};
StormtropperController.prototype.create = function(request, response, next) {
  var body = request.body;
  this.model.create(body, function(err, data) {
    if(err) {
      return next(err);
    }
    response.json(data);
  });
};
StormtropperController.prototype.update = function(request, response, next) {
  var _id = request.params._id,
      body = request.body;
  this.model.update(_id, body, function(err, data) {
    if(err) {
      return next(err);
    }
    response.json(data);
  });
};
StormtropperController.prototype.remove = function(request, response, next) {
  var _id = request.params._id;
  this.model.remove(_id, function(err, data) {
    if(err) {
      return next(err);
    }
    response.json(data);
  });
};
module.exports = function(StormtropperModel) {
  return new StormtropperController(StormtropperModel);
};

