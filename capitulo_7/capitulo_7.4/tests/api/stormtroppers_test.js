var request = require('supertest'),
    assert  = require('assert'),
    debug   = require('debug')('livro_nodejs:test'),
    app     = require('../../app'),
    mongo   = require('../../db/mongo');

var insert = function(callback) {
  var rex = { name : "CT-7567", nickname: "Rex" };
  mongo.collection('stormtroppers').insert(rex, callback);
};
describe('Stormtroppers Endpoints', function () {
  before(function(done) {
    var stormtroppers = [
          { name : "CT-1010", nickname : "Fox" },
          { nickname : "Hardcase" },
          { name : "CT-2224", nickname : "Cody" }
        ];
    mongo.collection('stormtroppers').insert(stormtroppers, done);
  });
  afterEach(function(done) {
    mongo.collection('stormtroppers').remove({}, done);
  });
  it('GET /stormtroppers | returns all clones', function(done) {
    request(app)
      .get('/stormtroppers')
      .end(function(err, response) {
        var body = response.body;
        assert.equal(body.length, 3);
        assert.equal(body[0].name, 'CT-1010');
        assert.equal(body[0].nickname, 'Fox');
        done();
      });
  });
  it('GET /stormtroppers/:_id', function(done) {
    insert(function(err, result) {
      var _id = result._id;
      request(app)
        .get('/stormtroppers/' + _id)
        .end(function(err, response) {
          var body = response.body;
          delete body._id;
          assert.deepEqual(body, { name: 'CT-7567', nickname: 'Rex' });
          done();
        });
    });
  });
  it('GET /stormtroppers/:_id not found', function(done) {
    var _id = '55555aaaaa55555aaaaa4444';
    request(app)
      .get('/stormtroppers/' + _id)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, response) {
        var body = response.body
        assert.equal(response.statusCode, 404);
        done();
      });
  });
  it('POST /stormtroppers', function(done) {
    var fives = { name : "CT-27-5555", nickname : "Fives" };
    request(app)
      .post('/stormtroppers')
      .send(fives)
      .expect(201)
      .end(function(err, response) {
        var body = response.body;
        assert.equal(body.nickname, 'Fives')
        assert.ok(body._id);
        done();
      });
  });
  it('PUT /stormtroppers/:_id', function(done) {
    insert(function(err, result) {
      var _id = result._id;
      request(app)
        .put('/stormtroppers/' + _id)
        .send({ name: "CT-7567-77" })
        .end(function(err, response) {
          var body = response.body;
          assert.deepEqual(body, { ok: true, n: 1, updatedExisting: true });
          done();
        });
    });
  });
  it('DELETE /stormtroppers/:_id', function(done) {
    insert(function(err, result) {
      var _id = result._id;
      request(app)
        .delete('/stormtroppers/' + _id)
        .end(function(err, response) {
          var body = response.body;
          assert.deepEqual(body, { n: 1 });
          done();
        });
    });
  });
});//describe
