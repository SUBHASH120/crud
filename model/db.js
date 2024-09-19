import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.PGUSER || 'postgres',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'demo',
    password: process.env.PGPASSWORD || 'password',
    port: process.env.PGPORT || 5432,
})
if(pool.connect()){
    console.log('connected')
}
export default pool;