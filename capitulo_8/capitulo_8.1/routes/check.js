'use strict';
var express = require('express'),
    router  = express.Router(),
    pkg     = require('../package.json'),
    mongo   = require('../db/mongo'),
    config  = require('config');
router.get('/status', function(request, response) {
  response.end('PONG');
});
router.get('/version', function(request, response) {
  response.json({
    "applicationName": pkg.name,
    "versionRelease": pkg.version
  });
});
router.get('/status/complete', function(request, response, next) {
  var ret = {
    "ok": true,
    "applicationName": pkg.name,
    "checks": []
  };

  mongo.collection('dragons').findOne({}, function(err, result) {
    ret.ok = !err;
    ret.checks.push({
      "ok": !err,
      "name": "mongo",
      "error": (err ? err.message : ''),
      "details": {
        "url": config.get('mongo.server') + ':' + config.get('mongo.port')
      }
    });
    response.json(ret);
  });
});
module.exports = router;
