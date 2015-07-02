var fixtures                = require('../../fixtures'),
    StormtropperModel       = require('../../../models/StormtropperModel')(fixtures.mongo),
    StormtropperController  = new require('../../../controllers/StormtropperController')(StormtropperModel),
    assert                  = require('assert'),
    debug                   = require('debug')('Stormtroppers:test');

var request = fixtures.request;
var response = fixtures.response;
request.params._id = '5569c7fe17fa3690d24de049';

describe('StormtropperController', function () {
  it('#create', function() {
    request.body.name = 'Rex';
    response.json = function(obj) {
      assert.deepEqual(obj, {_id: '5569c7fe17fa3690d24de049', nickname: 'Rex'});
    };
    StormtropperController.create(request, response, fixtures.next);
  });
  it('#getAll', function() {
    response.json = function(obj) {
      debug(obj);
      assert.deepEqual(obj, [{nickname: 'Fives'}, {nickname: 'Fox'}]);
    };
    StormtropperController.getAll(request, response, fixtures.next);
  });
  it('#getById', function() {
    response.json = function(obj) {
      assert.deepEqual(obj, {nickname: 'Fives'});
    };
    StormtropperController.getById(request, response, fixtures.next);
  });
  it('#update', function() {
    response.json = function(obj) {
      assert.deepEqual(obj, {ok: 1, nModified: 1, n: 1 });
    };
    StormtropperController.update(request, response, fixtures.next);
  });
  it('#delete', function() {
    response.json = function(obj) {
      assert.deepEqual(obj, {ok: 1, n: 1});
    };
    StormtropperController.remove(request, response, fixtures.next);
  });
});//describe
