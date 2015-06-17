var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.send('get all stormtroppers');
});
router.get('/:_id', function (request, response) {
  response.send('get a specific stormtropper by id');
});
router.post('/', function (request, response) {
  response.send('create a new stormtroppers');
});
router.put('/:_id', function (request, response) {
  response.send('update a stormtropper');
});
router.delete('/:_id', function (request, response) {
  response.send('update a stormtropper');
});

module.exports = router;
