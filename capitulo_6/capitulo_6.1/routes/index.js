var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Stormtroppers API' });
});

router.get('/xml', function (request, response) {
  response.header('Content-Type','text/xml');
  response.send('<?xml version="1.0" encoding="UTF-8"?><characters><character><name>Boba Fett</name><homeworld>Kamino</homeworld></character><character><name>Jango Fett</name><homeworld>Concord Dawn</homeworld></character><character><name>Chewbacca</name><homeworld>Kashyyyk</homeworld></character></characters>');
});

var json2xml = require('json2xml');
router.get('/xml-mapper', function (request, response) {
  response.header('Content-Type','text/xml');
  var obj = { "characters": [
    { "character": { "name": "Boba Fett", "homeworld": "Kamino" } },
    { "character": { "name": "Jango Fett", "homeworld": "Concord Dawn" } },
    { "character": { "name": "Chewbacca", "homeworld": "Kashyyyk" } }
  ]};

  response.send(json2xml(obj));
});

module.exports = router;
