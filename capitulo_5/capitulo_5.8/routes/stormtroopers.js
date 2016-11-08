var express = require('express'),
    router = express.Router();

var StormtrooperController = require('../controllers/StormtrooperController');

router.get('/', StormtrooperController.getAll);
router.get('/:_id', StormtrooperController.getById);
router.post('/', StormtrooperController.create);
router.put('/:_id', StormtrooperController.update);
router.delete('/:_id', StormtrooperController.remove);

module.exports = router;
