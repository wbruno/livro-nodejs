var debug = require('debug')('livro_nodejs:model');
function StormtropperModel(mongo) {
  this.mongo = mongo;
}
StormtropperModel.prototype.find = function(query, callback) {
  this.mongo.collection('stormtroppers').find(query, callback);
};
StormtropperModel.prototype.findOne = function(_id, callback) {
  var query = { _id: this.mongo.ObjectId(_id) };
  this.mongo.collection('stormtroppers').findOne(query, callback);
};
StormtropperModel.prototype.create = function(data, callback) {
  this.mongo.collection('stormtroppers').insert(data, callback);
};
StormtropperModel.prototype.update = function(_id, data,callback) {
  var query = { _id: this.mongo.ObjectId(_id) };
  this.mongo.collection('stormtroppers').update(query, data, callback);
};
StormtropperModel.prototype.remove = function(_id, callback) {
  var query = { _id: this.mongo.ObjectId(_id) };
  this.mongo.collection('stormtroppers').remove(query, callback);
};
module.exports = function(mongo) {
  return new StormtropperModel(mongo);
}
