const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema
    .createTable(DatabaseTableConstants.GMB_LOCATION_TABLE, table => {
        table.string('id').primary();
        table.string('business_name');
        table.string('business_type');
        table.string('region_code');
        table.string('language_code');
        table.string('postal_code');
        table.string('sorting_code');
        table.string('administrative_area');
        table.string('locality');
        table.string('sublocality');
        table.specificType('address_lines', 'text[]');
        table.specificType('recipients', 'text[]');
        table.string('verification_status');
    })
    .createTable(DatabaseTableConstants.GMB_LOCATION_ORGANIZATION_BRIDGE_TABLE, table => {
        table.uuid('organization_id').references('id').inTable(DatabaseTableConstants.ORGANIZATION_TABLE).onDelete('CASCADE');
        table.string('gmb_id').references('id').inTable(DatabaseTableConstants.GMB_LOCATION_TABLE).onDelete('CASCADE');
        table.primary(['organization_id', 'gmb_id']);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable(DatabaseTableConstants.GMB_LOCATION_TABLE)
    .dropTable(DatabaseTableConstants.GMB_LOCATION_ORGANIZATION_BRIDGE_TABLE);
};
