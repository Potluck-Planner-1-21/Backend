const db = require('../data/dbConfig');

function find() {
    return db.select('id', 'name').from('items');
}

async function add(item) {
    const [id] = await db.insert(item).into('items');
    return findById(id);
}

function findById(id) {
    return db.select('id', 'name').from('items').where('id', id);
}

module.exports = {
    find,
    add,
    findById,
}