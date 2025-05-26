const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.createTable(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_DOCUMENT_TABLE, table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('reinstatement_id').references('id').inTable(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_TABLE).onDelete('CASCADE').index();
        table.string('document_name');
        table.string('document_type');
        table.integer('document_size');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_DOCUMENT_TABLE);
};
