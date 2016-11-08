var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Stormtroopers API' });
});

module.exports = router;
