'use strict';
function StormtropperDAO(model) {
  this.model = model;
}
StormtropperDAO.prototype.create = function(data, callback) {
  var model = new this.model(data);
  model.save(function(err, result) {
    callback(err, result);
  });
};
StormtropperDAO.prototype.find = function(query, callback) {
  this.model.find(query).exec(callback);
};
StormtropperDAO.prototype.findOne = function(_id, callback) {
  var query = { _id : _id };
  this.model.findOne(query).exec(callback);
};
StormtropperDAO.prototype.update = function(_id, data, callback) {
  var query = { _id : _id };
  this.model.update(query, data).exec(function(err, result) {
    callback(err, result);
  });
};
StormtropperDAO.prototype.remove = function(_id, callback) {
  var query = { _id : _id };
  this.model.remove(query).exec(function(err, result) {
    callback(err, result);
  });
};
module.exports = function(mongoose) {
  var Stormtropper = mongoose.model('Stormtropper', {
    name:       String,
    nickname:   String,
    divisions:  [String],
    patent:     String
  });
  return new StormtropperDAO(Stormtropper);
};
