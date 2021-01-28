
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'test1', email: 'test@example.com', password: 'test1'},
        {name: 'test2', email: 'test@example.com', password: 'test2'},
        {name: 'test3', email: 'test@example.com', password: 'test3'},
      ]);
    });
};
