import express from 'express';
import * as clientController from '../controllers/clientController.js';
const router = express.Router();

router.get('/clients', clientController.getClients);
router.post('/newClient', clientController.createClient);
router.put('/updateClient/:id', clientController.updateClient);
router.delete('/deleteClient/:id', clientController.deleteClient);
router.get('/searchClients', clientController.searchClient);

export default router;