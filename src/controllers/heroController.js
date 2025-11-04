const heroModel = require('../models/heroModel');

//GET /superheroes
exports.getAllHeroes = async (req, res) => {
    try {
        const heroes = await heroModel.fetchAllHeroes();
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching heroes', error: err.message});
    }
};

//GET /superheroes/:id
exports.getHeroById = async (req, res) => {
    try {
        //Get id from URL
        const heroId = req.params.id;
        //Get all heroes from API
        const heroes = await heroModel.fetchAllHeroes();
        //Find specific hero (parseInt because ID from url is a string) 
        const hero = heroes.find(h => h.id === parseInt(heroId));
        //If hero not found send 404
        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching hero', error: err.message });
    }
};