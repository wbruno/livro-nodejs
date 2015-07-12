var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Stormtroppers API' });
});
router.get('/loop', function (request, response) {
  response.render('loop', { title: 'Loop page', films: [
      { name: 'Episode I: The Phantom Menace'},
      { name: 'Episode II: Attack of the Clones'},
      { name: 'Episode III: Revenge of the Sith'},
      { name: 'Episode IV: A New Hope'},
      { name: 'Episode V: The Empire Strikes Back'},
      { name: 'Episode VI: Return of the Jedi'},
      { name: 'Episode VII: The Force Awakens'}
    ]});
});
router.get('/if', function (request, response) {
  response.render('if', { title: 'if', is3D: false });
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
