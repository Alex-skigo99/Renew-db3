exports.up = function(knex) {
    return knex.schema.createTable('google_credentials', table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('user_id').references('id').inTable('app_user');
        table.string('google_refresh_token');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('google_credentials');
};
