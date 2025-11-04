const store = require('../models/heroStore');

exports.createHero = (req, res) => {
    const created = store.create(req.body);
    res.status(201).json({ message: 'Hero created!', hero: created });
};

exports.getAllHeroes = (req, res) => {
    const all = store.findAll();
    res.json(all);
};

exports.getHeroById = (req, res) => {
    const hero = store.findById(req.params.id);
    if (!hero) {
        return res.status(404).json({ error: 'Hero not found' });
    }
    res.json(hero);
};

exports.updateHero = (req, res) => {
    const updated = store.update(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ error: 'Hero not found' });
    }
    res.json({ message: 'Hero updated!', hero: updated});
};

exports.deleteHero = (req, res) => {
    const ok = store.delete(req.params.id);
    if (!ok) {
        return res.status(404).json({ error: 'Hero not found' });
    }
    res.json({ message: 'Hero deleted' });
};


