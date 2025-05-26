const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.createTable(DatabaseTableConstants.NOTIFICATION_TABLE, table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('organization_id').references('id').inTable(DatabaseTableConstants.ORGANIZATION_TABLE).onDelete('CASCADE').index();
        table.uuid('user_id').references('id').inTable(DatabaseTableConstants.USER_TABLE).onDelete('CASCADE').index();
        table.timestamps(true, true);
        table.boolean('read').defaultTo(false);
        table.text('notification_text');
        table.jsonb('data');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(DatabaseTableConstants.NOTIFICATION_TABLE);
};