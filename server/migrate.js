import db from './database.js';

await db.schema.hasTable('gear_items').then(exists => {
  if (!exists) {
    return db.schema.createTable('gear_items', (table) => {
      table.string('id').primary();
      table.string('name').notNullable();
      table.boolean('category').defaultTo(false);
      table.integer('weight_g').defaultTo(0);
      table.string('notes');
      table.timestamp('created_at').defaultTo(new Date());
    });
  }
});

console.log('Datenbank bereit.');
process.exit(0);
