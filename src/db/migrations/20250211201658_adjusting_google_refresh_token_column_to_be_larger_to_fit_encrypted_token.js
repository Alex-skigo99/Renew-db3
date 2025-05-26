exports.up = function(knex) {
    return knex.schema.alterTable('google_credentials', table => {
        table.text('google_refresh_token').alter();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('google_credentials', (table) => {
        table.string('google_refresh_token', 255).alter();
    });
};
