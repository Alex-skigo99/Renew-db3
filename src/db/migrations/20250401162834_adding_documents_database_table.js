const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.createTable(DatabaseTableConstants.GMB_LOCATION_DOCUMENT_TABLE, table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('organization_id').references('id').inTable(DatabaseTableConstants.ORGANIZATION_TABLE).onDelete('CASCADE');
        table.string('gmb_id').references('id').inTable(DatabaseTableConstants.GMB_LOCATION_TABLE).onDelete('CASCADE').index();
        table.string('document_name');
        table.string('document_type');
        table.integer('document_size');
        table.dateTime('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(DatabaseTableConstants.GMB_LOCATION_DOCUMENT_TABLE);
};
