import { query } from '../db.js';

export const getClients = async () => {
    const result = await query(
        'SELECT * FROM clients_tb'
    );

    return result.rows;
};