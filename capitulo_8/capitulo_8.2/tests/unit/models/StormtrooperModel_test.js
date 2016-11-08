var fixtures          = require('../../fixtures'),
    StormtrooperModel = require('../../../models/StormtrooperModel')(fixtures.mongo),
    assert            = require('assert'),
    debug             = require('debug')('livro_nodejs:test');

describe('StormtrooperModel', function () {
  it('#insert', function(done) {
    StormtrooperModel.create({nickname: 'Rex'}, function(err, result) {
      assert.deepEqual(result, {_id: '5569c7fe17fa3690d24de049', nickname: 'Rex'});
      done();
    });
  });
  it('#find', function(done) {
    StormtrooperModel.find({}, function(err, result) {
      assert.equal(result.length, 2);
      done();
    });
  });
  it('#findOne', function(done) {
    StormtrooperModel.findOne({nickname: 'Fives'}, function(err, result) {
      assert.equal(result.nickname, 'Fives');
      done();
    });
  });
  it('#update', function(done) {
    StormtrooperModel.update({nickname: 'Fives' }, { name: 'CT-5555' }, function(err, result) {
      debug(result);
      assert.deepEqual(result, {"ok": 1, "nModified": 1, "n": 1});
      done();
    });
  });
  it('#remove', function(done) {
    StormtrooperModel.remove({nickname: 'Rex'}, function(err, result) {
      assert.deepEqual(result, {"ok": 1, "n": 1});
      done();
    });
  });
});//describe
