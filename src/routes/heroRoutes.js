const express = require('express');
const router = express.Router();

const { validateFavorite } = require('../validators/favoriteValidator');
const heroController = require('../controllers/heroController');

//console.log('getFavorites exists?', typeof heroController.getFavorites);
//console.log('getFavorites value:', heroController.getFavorites);

//Endpoints for extern API heroes
router.get('/', heroController.getAllHeroes);

//Endpoints for favorites
router.post('/favorites', validateFavorite, heroController.addFavorite);
router.get('/favorites', heroController.getFavorites);
router.delete('/favorites/:id', heroController.deleteFavorite);

router.get('/:id', heroController.getHeroById);

module.exports = router;