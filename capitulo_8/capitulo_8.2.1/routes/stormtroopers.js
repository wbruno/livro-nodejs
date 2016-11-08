var express = require('express'),
    router = express.Router();

var mongo = require('../db/mongo');
var StormtrooperModel = require('../models/StormtrooperModel')(mongo);
var StormtrooperController = require('../controllers/StormtrooperController')(StormtrooperModel);

router.get('/', StormtrooperController.getAll.bind(StormtrooperController));
router.get('/:_id', StormtrooperController.getById.bind(StormtrooperController));
router.post('/', StormtrooperController.create.bind(StormtrooperController));
router.put('/:_id', StormtrooperController.update.bind(StormtrooperController));
router.delete('/:_id', StormtrooperController.remove.bind(StormtrooperController));

module.exports = router;
