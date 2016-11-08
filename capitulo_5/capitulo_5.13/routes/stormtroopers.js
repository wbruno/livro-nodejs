var express = require('express'),
    router = express.Router();

var mongoose = require('../db/mongoose');
var StormtrooperModel = require('../models/StormtrooperModel')(mongoose);
var StormtrooperController = require('../controllers/StormtrooperController')(StormtrooperModel);

var passport = require('passport');

router.get('/', passport.authenticate('basic', { session: false }), StormtrooperController.getAll.bind(StormtrooperController));
router.get('/:_id', passport.authenticate('basic', { session: false }), StormtrooperController.getById.bind(StormtrooperController));
router.post('/', StormtrooperController.create.bind(StormtrooperController));
router.put('/:_id', StormtrooperController.update.bind(StormtrooperController));
router.delete('/:_id', StormtrooperController.remove.bind(StormtrooperController));

module.exports = router;
