const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema
    .createTable(DatabaseTableConstants.ORGANIZATION_TABLE, table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('name');
    })
    .alterTable(DatabaseTableConstants.USER_TABLE, table => {
        table.uuid('organization_id').references('id').inTable(DatabaseTableConstants.ORGANIZATION_TABLE).onDelete("SET NULL");
    });
};

exports.down = function(knex) {
    return knex.schema
    .alterTable(DatabaseTableConstants.USER_TABLE, table => {
        table.dropColumn('organization_id');
    })
    .dropTable(DatabaseTableConstants.ORGANIZATION_TABLE);
};
