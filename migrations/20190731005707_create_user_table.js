
exports.up = function(knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id').unsigned().primary();;
    table.string('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
