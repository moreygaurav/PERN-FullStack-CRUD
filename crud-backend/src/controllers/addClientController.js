import * as clientServices from '../services/clientServices.js';

export const createClient = async (req, res) => {
    try {

        const { name, email, job, rate, isActive } = req.query;

        if (!name || !email) {
            return res.status(400).json({
                error: 'Name and Email are required'
            });
        }

        const newClient = await clientServices.createClient(req.query);


        res.status(201).json({
            success: true,
            message: 'Client created successfully',
            data: newClient
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
