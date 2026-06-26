import express from 'express';
import * as clientController from '../controllers/clientController.js';
const router = express.Router();

router.get('/', clientController.getClients);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);
router.get('/search', clientController.searchClient);

export default router;