import { query } from '../db.js';

export const getClients = async () => {
    const result = await query(
        'SELECT * FROM clients_tb'
    );

    return result.rows;
};



export const createClient = async (clientData) => {
    try {
        const { name, email, job, rate, isActive } = clientData;

        const result = await query(
            `insert into clients_tb (name, email, job, rate, isActive) values ($1, $2, $3, $4,$5) returning *`,
            [name, email, job, rate, isActive]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};



export const updateClient = async (clientId,clientData) => {
try{
    const {name, email, job, rate,isActive} = clientData;

    const result = await query(
        `update clients_tb set name=$1, email=$2, job=$3, rate=$4, isactive=$5 where id = $6 returning * `, [name, email, job, rate, isactive, clientId]
    );

    return result.rows;
}catch(error){
throw new Error(error.message);
}
}