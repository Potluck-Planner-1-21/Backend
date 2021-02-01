
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'test1', email: 'test@example.com', password: '$2a$14$A/3bmX/Lciza4va8iVW2aeAFWBhnljrlUrSFYq7r8QfzX9F7gvJbe'},
        {name: 'test2', email: 'test@example.com', password: '$2a$14$quajuoOfaX1MRZ7mNq.ktuZak5rGI/z9CKCkh/khZvJfrDV3qwrKG'},
        {name: 'test3', email: 'test@example.com', password: '$2a$14$3VhIa.asILpOLviTtHKXautmHdJq0DYuZ4H8kvIA0mqKZjbZc3yOu'},
      ]);
    });
};
