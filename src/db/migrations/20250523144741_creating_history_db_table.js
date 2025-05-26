const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.createTable(DatabaseTableConstants.HISTORY_TABLE, table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('gmb_id')
            .index()
            .notNullable()
            .references('id')
            .inTable(DatabaseTableConstants.GMB_LOCATION_TABLE)
            .onDelete('CASCADE');
        table.timestamps(true, true);
        table.string('previous_status');
        table.string('new_status');
        table.integer('review_amount');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(DatabaseTableConstants.HISTORY_TABLE);
};
