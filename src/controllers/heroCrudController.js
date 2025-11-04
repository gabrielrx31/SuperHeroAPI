const store = require('../models/heroStore');

exports.createHero = (req, res) => {
    const created = store.create(req.body);
    res.status(201).json({ message: 'Hero created!', hero: created });
};



