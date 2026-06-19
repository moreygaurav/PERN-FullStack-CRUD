import * as updateService from '../services/clientServices.js';

export const updateClient = async (req, res) => {
    try{
        const clientId = req.params.id;
        const clientData = req.clientData;

        const updateClient = await updateService.updateClient(clientData,clientId);

        if(!updateClient){
            res.status(400).json({
                success : false,
                message : " something went wrong! no changes detected.",
                data : updateClient
            });
        }

    } catch(error){
        res.status(500).json({error : error.message})
    }
};