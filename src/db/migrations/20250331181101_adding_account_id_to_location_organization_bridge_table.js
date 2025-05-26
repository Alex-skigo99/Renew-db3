const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GMB_LOCATION_ORGANIZATION_BRIDGE_TABLE, table => {
        table.text('account_id');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GMB_LOCATION_ORGANIZATION_BRIDGE_TABLE, table => {
        table.dropColumn('account_id');
    });
};
