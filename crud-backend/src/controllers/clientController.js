import * as clientServices from '../services/clientServices.js';

export const getClients = async (req, res) => {
    try {
        const clients = await clientServices.getClients();

        res.status(200).json(clients);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error.message
        });
    }
};