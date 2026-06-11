import knex from 'knex';

const db = knex({
  client: 'better-sqlite3',
  connection: { filename: './database.db' },
  useNullAsDefault: true,
});

export default db;
