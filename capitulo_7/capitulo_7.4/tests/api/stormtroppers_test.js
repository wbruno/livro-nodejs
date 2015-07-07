var request = require('supertest'),
    assert  = require('assert'),
    debug   = require('debug')('livro_nodejs:test'),
    app     = require('../../app'),
    mongo   = require('../../db/mongo');

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

});//describe
