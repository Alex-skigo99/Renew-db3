const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE, table => {
        table.text('google_access_token');
        table.bigInteger('google_access_token_expiry_date');
        table.string('google_email');
        table.boolean('is_google_refresh_token_valid').defaultTo(true);
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE, (table) => {
        table.dropColumn('google_access_token');
        table.dropColumn('google_access_token_expiry_date');
        table.dropColumn('google_email');
    });
};
