var express = require('express'),
    router = express.Router();

var StormtropperController = require('../controllers/StormtropperController');

router.get('/', StormtropperController.getAll);
router.get('/:_id', StormtropperController.getById);
router.post('/', StormtropperController.create);
router.put('/:_id', StormtropperController.update);
router.delete('/:_id', StormtropperController.remove);

module.exports = router;
