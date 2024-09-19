import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: '13.201.193.71',
    database: 'demo',
    password: 'password',
    port: 5432
})
if(pool.connect()){
    console.log('connected')
}
export default pool;