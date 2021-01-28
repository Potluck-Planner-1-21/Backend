
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('potluck').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('potluck').insert([
        {name: 'potluck1', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 1},
        {name: 'potluck2', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 1},
        {name: 'potluck3', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 1},
        {name: 'potluck1', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 2},
        {name: 'potluck2', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 2},
        {name: 'potluck3', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 2},
        {name: 'potluck1', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 3},
        {name: 'potluck2', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 3},
        {name: 'potluck3', date: '2/1/21', time: '3pm', location: 'my house', organizer_id: 3},
      ]);
    });
};
