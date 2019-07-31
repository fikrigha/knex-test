
exports.up = function(knex) {
  knex.schema.dropTable('user');
  return knex.schema.createTable('_user', function (table) {
    table.increments('id').unsigned().primary();;
    table.string('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('_user');
};
