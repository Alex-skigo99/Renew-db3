const DatabaseTableConstants = require("../DatabaseTableConstants");

exports.up = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.USER_TABLE, table => {
        table.dateTime('last_login');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable(DatabaseTableConstants.USER_TABLE, (table) => {
        table.dropColumn('last_login');
    });
};