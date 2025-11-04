const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

router.post('/', heroCrudController.createHero);
router.get('/', heroCrudController.getAllHeroes);
router.get('/:id', heroCrudController.getHeroById);
router.put('/:id', heroCrudController.updateHero);
router.delete('/:id', heroCrudController.deleteHero);

module.exports = router;