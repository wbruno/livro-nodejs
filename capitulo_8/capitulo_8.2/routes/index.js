var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.status(201);
  response.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' });
});

// stormtroppers
router.use('/stormtroppers', require('./stormtroppers'));

module.exports = router;
