exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
  table.increments();
  table.string('name').notNullable().defaultTo('');
   table.integer('store_id')
   .notNullable()
   .references('id')
   .inTable('stores')
   .onDelete('CASCADE')
   .index();
   table.decimal('price').notNullable().defaultTo();
   table.text('description').notNullable().defaultTo('');
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
