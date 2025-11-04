const heroModel = require('../models/heroModel');

let favorites = [];

exports.getAllHeroes = async(req, res)=> {
    try {
        const heroes = await heroModel.fetchAllHeroes();
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching heroes', error: err.message });
    }
};

exports.getHeroById = async (req, res) => {
    try {
        const heroes = await heroModel.fetchAllHeroes();
        const hero = heroes.find(h => h.id === parseInt(req.params.id));
        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }

        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching hero', error: err.message });
    }
};

exports.addFavorite = (req, res) => {
    const { id, note } = req.body;
    const favorite = { id: parseInt(id), note };
    favorites.push(favorite);
    res.status(201).json(favorite);
};

exports.getFavorites = (req, res) => {
    res.json(favorites);
};

exports.deleteFavorite = (req, res) => {
    const id = parseInt(req.params.id);
    const index = favorites.findIndex(f => f.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Favorite not found' });
    }

    favorites.splice(index, 1);
    res.json({ message: 'Favorite deleted' });
};