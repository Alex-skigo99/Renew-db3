exports.up = function(knex) {
    return knex.schema.createTable('app_user', table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('email');
        table.string('name');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('app_user');
};
