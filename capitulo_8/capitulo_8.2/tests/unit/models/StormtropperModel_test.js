var fixtures          = require('../../fixtures'),
    StormtropperModel = require('../../../models/StormtropperModel')(fixtures.mongo),
    assert            = require('assert'),
    debug             = require('debug')('livro_nodejs:test');

describe('StormtropperModel', function () {
  it('#insert', function(done) {
    StormtropperModel.create({nickname: 'Rex'}, function(err, result) {
      assert.deepEqual(result, {_id: '5569c7fe17fa3690d24de049', nickname: 'Rex'});
      done();
    });
  });
  it('#find', function(done) {
    StormtropperModel.find({}, function(err, result) {
      assert.equal(result.length, 2);
      done();
    });
  });
  it('#findOne', function(done) {
    StormtropperModel.findOne({nickname: 'Fives'}, function(err, result) {
      assert.equal(result.nickname, 'Fives');
      done();
    });
  });
  it('#update', function(done) {
    StormtropperModel.update({nickname: 'Fives' }, { name: 'CT-5555' }, function(err, result) {
      debug(result);
      assert.deepEqual(result, {"ok": 1, "nModified": 1, "n": 1});
      done();
    });
  });
  it('#remove', function(done) {
    StormtropperModel.remove({nickname: 'Rex'}, function(err, result) {
      assert.deepEqual(result, {"ok": 1, "n": 1});
      done();
    });
  });
});//describe
