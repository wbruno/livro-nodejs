var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.send('get all stormtroopers');
});
router.get('/:_id', function (request, response) {
  response.send('get a specific stormtrooper by id');
});
router.post('/', function (request, response) {
  response.send('create a new stormtroopers');
});
router.put('/:_id', function (request, response) {
  response.send('update a stormtrooper');
});
router.delete('/:_id', function (request, response) {
  response.send('update a stormtrooper');
});

module.exports = router;
