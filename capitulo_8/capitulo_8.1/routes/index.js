var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.status(201);
  response.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' });
});

// stormtroopers
router.use('/stormtroopers', require('./stormtroopers'));
router.use('/check', require('./check'));

module.exports = router;
