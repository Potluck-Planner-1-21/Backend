const db = require('../data/dbConfig');

function find() {
    return db.select('id', 'name', 'date', 'time', 'location', 'organizer_id').from('potluck');
}

async function add(event) {
    const [id] = await db.insert(event).into('potluck');
    return findById(id);
}

function findById(id) {
    return db('potluck as p')
        .innerJoin('users as u', 'p.organizer_id', 'u.id')
        .select('p.id', 'p.name', 'p.date', 'p.time', 'p.location', 'u.name as organizer')
        .where('p.id', id);
}

function findEventItems(eventId) {
    return db('potluck_items as pi')
    .innerJoin('items as i', 'pi.item_id', 'i.id')
    .innerJoin('potluck as p', 'pi.potluck_id', 'p.id')
    .select('p.name as event_name', 'i.name as item_name')
    .where('pi.potluck_id', eventId);
}

module.exports = {
    find,
    add,
    findById,
    findEventItems,
}