const axios = require('axios');

exports.fetchAllHeroes = async () => {
    const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
    const heroes = response.data;

    const transformedHeroes = heroes.map(hero => {
        return {
            id: hero.id,
            name: hero.name,
            fullName: hero.biography.fullName,
            strength: hero.powerstats.strength,
            image: hero.images.md
        };
    });
    return transformedHeroes;
};
