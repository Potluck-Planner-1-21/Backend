
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('potluck_user_items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('potluck_user_items').insert([
        {potluck_id: 1, item_id: 1, user_id: 1},
        {potluck_id: 2, item_id: 1, user_id: 1},
        {potluck_id: 3, item_id: 1, user_id: 1},
        {potluck_id: 1, item_id: 1, user_id: 2},
        {potluck_id: 2, item_id: 1, user_id: 2},
        {potluck_id: 3, item_id: 1, user_id: 2},
        {potluck_id: 1, item_id: 1, user_id: 3},
        {potluck_id: 2, item_id: 1, user_id: 3},
        {potluck_id: 3, item_id: 1, user_id: 3},
        {potluck_id: 1, item_id: 2, user_id: 1},
        {potluck_id: 2, item_id: 2, user_id: 1},
        {potluck_id: 3, item_id: 2, user_id: 1},
        {potluck_id: 1, item_id: 2, user_id: 2},
        {potluck_id: 2, item_id: 2, user_id: 2},
        {potluck_id: 3, item_id: 2, user_id: 2},
        {potluck_id: 1, item_id: 2, user_id: 3},
        {potluck_id: 2, item_id: 2, user_id: 3},
        {potluck_id: 3, item_id: 2, user_id: 3},
        {potluck_id: 1, item_id: 3, user_id: 1},
        {potluck_id: 2, item_id: 3, user_id: 1},
        {potluck_id: 3, item_id: 3, user_id: 1},
        {potluck_id: 1, item_id: 3, user_id: 2},
        {potluck_id: 2, item_id: 3, user_id: 2},
        {potluck_id: 3, item_id: 3, user_id: 2},
        {potluck_id: 1, item_id: 3, user_id: 3},
        {potluck_id: 2, item_id: 3, user_id: 3},
        {potluck_id: 3, item_id: 3, user_id: 3},
      ]);
    });
};
