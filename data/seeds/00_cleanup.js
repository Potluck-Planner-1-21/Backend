
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('potluck_user_items').truncate();
  await knex('potluck_items').truncate();
  await knex('items').truncate();
  await knex('potluck').truncate();
  await knex('users').truncate();
};
