const db = require('../data/dbConfig');

function find() {
    return db.select('id', 'name', 'email').from('users');
}

function findByUsername(username) {
    return db.select('id', 'name', 'password').from('users').where('name', username);
}

async function add(user) {
    const [id] = await db.insert(user).into('users');
    return findById(id);
}
function findById(id) {
    return db.select('*').from('users').where('id', id);
}

module.exports = {
    find,
    findByUsername,
    add,
    findById,
}
