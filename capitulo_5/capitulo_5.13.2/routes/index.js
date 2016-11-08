var express = require('express'),
    jwt     = require('jwt-simple'),
    moment  = require('moment'),
    config  = require('config'),
    router = express.Router();

router.get('/', function (request, response) {
  response.status(201);
  response.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' });
});

router.post('/login', function (request, response, next) {
  var username = request.body.username;
  var password = request.body.password;

  if(username === 'rebels' && password === '1138') {
    var expires = moment().add(7, 'days').valueOf();
    var token = jwt.encode({
      user: username,
      exp: expires
    }, config.get('jwtTokenSecret'));

    response.json({
      token: token
    });
  } else {
    var err = new Error('Unauthorized');
    err.status = 401;
    next(err);
  }
});
// stormtroopers
router.use('/stormtroopers', require('./stormtroopers'));

module.exports = router;
