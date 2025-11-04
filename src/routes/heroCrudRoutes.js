const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

router.post('/', heroCrudController.addFavorite);
router.get('/', heroCrudController.getFavorites);
router.delete('/:id', heroCrudController.deleteFavorite);

module.exports = router;