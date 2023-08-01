import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "userr",
    password: "root" ,//Your password postgresql
    port: 5432 // default port on postgresql
});
