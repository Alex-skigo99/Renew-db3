const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE, table => {
        table.string('sub');
        table.unique(['organization_id', 'sub']);
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE, (table) => {
        table.dropUnique(['organization_id', 'sub']);
        table.dropColumn('sub');
    });
};
