var fixtures                = require('../../fixtures'),
    StormtrooperModel       = require('../../../models/StormtrooperModel')(fixtures.mongo),
    StormtrooperController  = new require('../../../controllers/StormtrooperController')(StormtrooperModel),
    assert                  = require('assert'),
    debug                   = require('debug')('livro_nodejs:test');

var request = fixtures.request;
var response = fixtures.response;
request.params._id = '5569c7fe17fa3690d24de049';

describe('StormtrooperController', function () {
  it('#create', function(done) {
    request.body.name = 'Rex';
    response.json = function(obj) {
      assert.deepEqual(obj, {_id: '5569c7fe17fa3690d24de049', nickname: 'Rex'});
      done();
    };
    StormtrooperController.create(request, response, fixtures.next);
  });
  it('#getAll', function(done) {
    response.json = function(obj) {
      debug(obj);
      assert.deepEqual(obj, [{nickname: 'Fives'}, {nickname: 'Fox'}]);
      done();
    };
    StormtrooperController.getAll(request, response, fixtures.next);
  });
  it('#getById', function(done) {
    response.json = function(obj) {
      assert.deepEqual(obj, {nickname: 'Fives'});
      done();
    };
    StormtrooperController.getById(request, response, fixtures.next);
  });
  it('#update', function(done) {
    response.json = function(obj) {
      assert.deepEqual(obj, {ok: 1, nModified: 1, n: 1 });
      done();
    };
    StormtrooperController.update(request, response, fixtures.next);
  });
  it('#delete', function(done) {
    response.json = function(obj) {
      assert.deepEqual(obj, {ok: 1, n: 1});
      done();
    };
    StormtrooperController.remove(request, response, fixtures.next);
  });
});//describe
