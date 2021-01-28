
exports.up = async function(knex) {
    await knex.schema.createTable('users', table => {
        table.increments('id');
        table.text('name').notNull();
        table.text('email').notNull();
        table.text('password').notNull();
    });

    await knex.schema.createTable('potluck', table => {
        table.increments('id');
        table.text('name').notNull();
        table.text('date').notNull();
        table.text('time').notNull();
        table.text('location').notNull();
        table.integer('organizer_id').notNull().references('id').inTable('users');
    });

    await knex.schema.createTable('items', table => {
        table.increments('id');
        table.text('name').notNull().unique();
    });

    await knex.schema.createTable('potluck_items', table => {
        table.integer('potluck_id')
            .notNull()
            .references('id')
            .inTable('potluck')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('item_id')
            .notNull()
            .references('id')
            .inTable('items')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['potluck_id', 'item_id']);
    });

    await knex.schema.createTable('potluck_user_items', table => {
        table.integer('potluck_id')
            .notNull()
            .references('id')
            .inTable('potluck')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('item_id')
            .references('id')
            .inTable('items')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('user_id')
            .notNull()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['potluck_id', 'item_id', 'user_id']);
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('potluck_user_items');
    await knex.schema.dropTableIfExists('potluck_items');
    await knex.schema.dropTableIfExists('items');
    await knex.schema.dropTableIfExists('potluck');
    await knex.schema.dropTableIfExists('users');
};
