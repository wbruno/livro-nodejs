var express = require('express'),
    router = express.Router();

var mongoose = require('../db/mongoose');
var StormtropperModel = require('../models/StormtropperModel')(mongoose);
var StormtropperController = require('../controllers/StormtropperController')(StormtropperModel);

var passport = require('passport');

router.get('/', passport.authenticate('basic', { session: false }), StormtropperController.getAll.bind(StormtropperController));
router.get('/:_id', passport.authenticate('basic', { session: false }), StormtropperController.getById.bind(StormtropperController));
router.post('/', StormtropperController.create.bind(StormtropperController));
router.put('/:_id', StormtropperController.update.bind(StormtropperController));
router.delete('/:_id', StormtropperController.remove.bind(StormtropperController));

module.exports = router;
