var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Stormtroppers API' });
});

module.exports = router;
