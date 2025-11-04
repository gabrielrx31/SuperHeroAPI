let heroList = [];
let currentId = 1;

exports.create = (data) => {
    const hero = { id: currentId++, ...data };
    heroList.push(hero);
    return hero;
};

exports.findAll = () => heroList;

exports.findById = (id) => heroList.find(h => h.id == id);

exports.update = (id, data) => {
    const index = heroList.findIndex(h => h.id ==id);
    if (index === -1) return null;
    heroList[index] = { id: Number(id), ...data };
    return heroList[index];
};

exports.delete = (id) => {
    const index = heroList.findIndex(h => h.id ==id);
    if (index === -1) return false;
    heroList.splice(index, 1);
    return true;
};