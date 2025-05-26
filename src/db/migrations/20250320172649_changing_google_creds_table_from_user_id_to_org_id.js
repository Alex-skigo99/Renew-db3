const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE, table => {
        table.uuid('organization_id').references('id').inTable(DatabaseTableConstants.ORGANIZATION_TABLE).onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE, (table) => {
        table.dropColumn('organization_id')
    });
};
