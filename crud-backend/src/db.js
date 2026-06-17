import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}); 
db.connect();

db.on('connect', () => {
    console.log('Database connected successfully');
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process with an error code
});


export const query = (text, params) => db.query(text, params);