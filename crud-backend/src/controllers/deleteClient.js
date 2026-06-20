import * as clientService from '../services/clientServices.js'

export const deleteClient = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (!id || isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: 'valid Client id is required'
            });
        }

        const deleted = await clientService.deleteClient(id);

        if (!deleted) {
            return res.status(404).json({
                success : false,
                message: 'client not found'
            });
        }
        res.status(200).json({
            success : true,
            message : "client deleted successfully" })
    } catch (error) {
        console.error("Delete client controller error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}