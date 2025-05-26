const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GMB_LOCATION_TABLE, table => {
        table.specificType('service_areas', 'text[]');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.GMB_LOCATION_TABLE, (table) => {
        table.dropColumn('service_areas');
    });
};
