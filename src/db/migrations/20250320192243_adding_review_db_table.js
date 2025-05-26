const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.createTable(DatabaseTableConstants.GMB_REVIEW_TABLE, (table) => {
        table.text('id').primary();
        table.string('gmb_id').references('id').inTable(DatabaseTableConstants.GMB_LOCATION_TABLE).onDelete('SET NULL');
        table.index('gmb_id');
        table.text('reviewerProfilePhotoUrl');
        table.text('reviewerDisplayName');
        table.string('starRating');
        table.text('comment');
        table.dateTime('createTime');
        table.dateTime('updateTime');
        table.text('reviewReplyComment');
        table.dateTime('reviewReplyUpdateTime');
        table.text('name');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(DatabaseTableConstants.GMB_REVIEW_TABLE);
};
