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
    return db.select('id', 'name', 'email').from('users').where('id', id);
}

function findUserEvents(userId) {
    return db.select('name', 'date', 'time', 'location').from('potluck').where('organizer_id', userId);
}

function update(id, changes) {
    return db.select('*').from('users').where('id', id).update(changes);
}

module.exports = {
    find,
    findByUsername,
    add,
    findById,
    findUserEvents,
    update,
}
