var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.status(201);
  response.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' });
});

// stormtroppers
router.get('/stormtroppers', function (request, response) {
  response.send('get all stormtroppers');
});
router.get('/stormtroppers/:_id', function (request, response) {
  response.send('get a specific stormtropper by id');
});
router.post('/stormtroppers', function (request, response) {
  response.send('create a new stormtroppers');
});
router.put('/stormtroppers/:_id', function (request, response) {
  response.send('update a stormtropper');
});
router.delete('/stormtroppers/:_id', function (request, response) {
  response.send('update a stormtropper');
});

module.exports = router;
