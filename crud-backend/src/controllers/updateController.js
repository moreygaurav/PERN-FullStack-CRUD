import * as updateService from '../services/clientServices.js';

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

        const updatedClient = await updateService.updateClient(clientId, clientData);

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