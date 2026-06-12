import knex from 'knex'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const db = knex({
    client: 'better-sqlite3',
    connection: {
        filename: join(__dirname, '../../trailbuddy.db')
    },
    useNullAsDefault: true,
})

export default db