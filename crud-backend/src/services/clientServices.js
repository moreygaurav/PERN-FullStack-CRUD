import { query } from '../db.js';

// Get all clients
export const getClients = async () => {
    const result = await query(
        'SELECT * FROM clients_db'
    );

    return result.rows;
};

// create new client
export const createClient = async (clientData) => {
    try {
        const { name, email, job, rate, isactive } = clientData;

        const result = await query(
            `insert into clients_db (name, email, job, rate, isactive) values ($1, $2, $3, $4,$5) returning *`,
            [name, email, job, rate, isactive]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// update existing client
export const updateClient = async (id, clientData) => {
    try {
        const { name, email, job, rate, isactive } = clientData;

        const setClauses = [];
        const params = [];
        let paramIndex = 1;

        // Name: Update only if explicitly provided and valid
        if (name !== undefined && name !== null && String(name).trim() !== '') {
            setClauses.push(`name = $${paramIndex++}`);
            params.push(String(name).trim());
        }

        // Email: Update only if explicitly provided and valid
        if (email !== undefined && email !== null && String(email).trim() !== '') {
            setClauses.push(`email = $${paramIndex++}`);
            params.push(String(email).trim());
        }

        // Other fields: Update if provided (can be null or any value)
        if (job !== undefined) {
            setClauses.push(`job = $${paramIndex++}`);
            params.push(job);
        }

        if (rate !== undefined) {
            setClauses.push(`rate = $${paramIndex++}`);
            params.push(rate);
        }

        if (isactive !== undefined) {
            setClauses.push(`isactive = $${paramIndex++}`);
            params.push(isactive);
        }

        // Must have at least one field to update
        if (setClauses.length === 0) {
            throw new Error("No update fields provided");
        }

        const queryText = `
            UPDATE clients_db 
            SET ${setClauses.join(', ')}
            WHERE id = $${paramIndex}
            RETURNING *
        `;

        params.push(id);

        const result = await query(queryText, params);

        if (result.rows.length === 0) {
            throw new Error(`Client with id ${id} not found`);
        }

        return result.rows[0];
    } catch (error) {
        console.error("Update client service error:", error);
        throw error;
    }
};

// delet client row 

export const deleteClient = async (id) => {
    try {
        const result = await query(`delete from clients_db where id=$1 returning id`, [id]);
        return result.rowCount > 0;
    }
    catch (error) {
        console.log("Delete client service error:", error);
        throw error;
    }
};


export const searchClients = async (searchTerm) => {
    const { rows } = await query(
        'select * from clients_db where name ILIKE $1 or email ILIKE $1',
       [`%${searchTerm}%`]
    )
    return rows;
}