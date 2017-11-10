exports.up = function(knex, Promise) {
  return knex.schema.createTable('stores', (table) => {
   table.increments();
   table.string('name').notNullable().defaultTo('');
   table.text('description').notNullable().defaultTo('');
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stores');
};
