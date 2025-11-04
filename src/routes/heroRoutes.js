const express = require('express');
const router = express.Router();

const heroController = require('../controllers/heroController');

router.get('/', heroController.getAllHeroes);
router.get('/:id', heroController.getHeroById);

module.exports = router;