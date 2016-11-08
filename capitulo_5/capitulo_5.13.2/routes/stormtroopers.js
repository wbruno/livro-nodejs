var express = require('express'),
    jwt     = require('jwt-simple'),
    config  = require('config'),
    moment  = require('moment'),
    router = express.Router();

var mongoose = require('../db/mongoose');
var StormtrooperModel = require('../models/StormtrooperModel')(mongoose);
var StormtrooperController = require('../controllers/StormtrooperController')(StormtrooperModel);


var middlewareAuth = function(request, response, next) {
  var token = request.query.token || request.headers['x-access-token'];
  if(!token) {
    var err = new Error('Forbidden');
    err.status = 403;
    return next(err);
  }
  try {
    var decoded = jwt.decode(token, config.get('jwtTokenSecret'));
    var isExpired = moment(decoded.exp).isBefore(new Date());
    if(isExpired) {
      var err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    } else {
      request.user = decoded.user;
      next();
    }
  } catch(err) {
    return next(err);
  }
};

router.get('/', middlewareAuth, StormtrooperController.getAll.bind(StormtrooperController));
router.get('/:_id', StormtrooperController.getById.bind(StormtrooperController));
router.post('/', StormtrooperController.create.bind(StormtrooperController));
router.put('/:_id', StormtrooperController.update.bind(StormtrooperController));
router.delete('/:_id', StormtrooperController.remove.bind(StormtrooperController));

module.exports = router;
