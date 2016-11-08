'use strict';
function StormtrooperDAO(model) {
  this.model = model;
}
StormtrooperDAO.prototype.create = function(data, callback) {
  var model = new this.model(data);
  model.save(function(err, result) {
    callback(err, result);
  });
};
StormtrooperDAO.prototype.find = function(query, callback) {
  this.model.find(query).exec(callback);
};
StormtrooperDAO.prototype.findOne = function(_id, callback) {
  var query = { _id : _id };
  this.model.findOne(query).exec(callback);
};
StormtrooperDAO.prototype.update = function(_id, data, callback) {
  var query = { _id : _id };
  this.model.update(query, data).exec(function(err, result) {
    callback(err, result);
  });
};
StormtrooperDAO.prototype.remove = function(_id, callback) {
  var query = { _id : _id };
  this.model.remove(query).exec(function(err, result) {
    callback(err, result);
  });
};
module.exports = function(mongoose) {
  var Stormtrooper = mongoose.model('Stormtrooper', {
    name:       String,
    nickname:   String,
    divisions:  [String],
    patent:     String
  });
  return new StormtrooperDAO(Stormtrooper);
};
