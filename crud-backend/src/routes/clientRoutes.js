import express from 'express';
import * as clientController from '../controllers/clientController.js';
import * as addClientController from '../controllers/addClientController.js';
import * as updateController from '../controllers/updateController.js';
import * as deleteController from '../controllers/deleteClient.js';
const router = express.Router();

router.get('/clients', clientController.getClients);
router.post('/newClient', addClientController.createClient);
router.put('/updateClient/:id', updateController.updateClient);
router.delete('/deleteClient/:id', deleteController.deleteClient);

export default router;