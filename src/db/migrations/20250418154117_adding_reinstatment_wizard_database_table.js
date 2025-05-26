const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.createTable(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_TABLE, table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('organization_id').references('id').inTable(DatabaseTableConstants.ORGANIZATION_TABLE).onDelete('CASCADE').index();
        table.uuid('user_id_who_submitted_form').references('id').inTable(DatabaseTableConstants.USER_TABLE).onDelete('SET NULL');
        table.string('contact_first_name');
        table.string('contact_last_name');
        table.string('contact_email');
        table.string('contact_phone_number');
        table.boolean('i_agree_to_terms').defaultTo(false).notNullable();
        table.string('google_listing_name');
        table.string('registered_company_name');
        table.integer('how_many_reviews');
        table.boolean('do_you_show_address_to_public').defaultTo(false);
        table.boolean('i_have_added_email_as_owner_to_listing').defaultTo(false);
        table.boolean('i_have_added_new_email_as_owner_to_listing').defaultTo(false);
        table.string('new_email_added_to_profile');
        table.boolean('i_have_removed_all_other_users').defaultTo(false);
        table.text('relevant_information');
        table.string('email_to_access_profile');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_TABLE);
};
