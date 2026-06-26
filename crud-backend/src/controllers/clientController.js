import * as clientServices from '../services/clientServices.js';

// get all clients controller
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

//Add client controller 
export const createClient = async (req, res) => {
    try {

        const { name, email, job, rate, isActive } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                error: 'Name and Email are required'
            });
        }

        const newClient = await clientServices.createClient(req.body);


        res.status(201).json({
            success: true,
            message: 'Client created successfully',
            data: newClient
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete client controller 
export const deleteClient = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (!id || isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: 'valid Client id is required'
            });
        }

        const deleted = await clientServices.deleteClient(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'client not found'
            });
        }
        res.status(200).json({
            success: true,
            message: "client deleted successfully"
        })
    } catch (error) {
        console.error("Delete client controller error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Update colient controller


export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;

        const Email = req.params.Email;



        if (!clientId) {
            return res.status(400).json({
                success: false,
                message: "Client id is not mentioned it is required "
            })
        }


        if (!clientData || Object.keys(clientData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Client data is required"
            });
        }

        const updatedClient = await clientServices.updateClient(clientId, clientData);

        if (!updatedClient) {
            return res.status(404).json({
                success: false,
                message: "Client not found or no changes made"
            });
        }

        res.status(200).json({
            success: true,
            message: "Client updated successfully",
            data: updatedClient
        });

    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Search client controller

export const searchClient = async (req, res) => {

    try {
       const searchTerm = req.query.q?.trim();

        if (!searchTerm) {
            return res.status(400).json({
                success: false,
                message: "search Term is required"
            });
        }

        const searchClients = await clientServices.searchClients(searchTerm);
        res.status(200).json({
            success: true,
            data: searchClients,
            count: searchClients.length
        });
    } catch (error) {
        console.error('error serching clients:', error);
        res.status(500).json({
            success: false,
            message: 'internal server error'
        });
    }
};