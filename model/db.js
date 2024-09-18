import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demo',
    password: 'password',
    port: 5432
})
if(pool.connect()){
    console.log('connected')
}
export default pool;