const heroModel = require('../models/heroModel');

//Henter data gennem heroModel og sender svar tilbage i JSON.
exports.getHeroData = async (req, res) => {
    const heroName = req.params.name.toLowerCase();
    try{
        const data = await heroModel.fetchAllHeroes(heroName);
        res.json(data); 
    } catch (err) {
        res.status(404).json({message: 'Hero not found'});
    }
};