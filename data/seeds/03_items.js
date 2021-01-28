
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'item1'},
        {name: 'item2'},
        {name: 'item3'},
      ]);
    });
};
