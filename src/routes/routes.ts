import { Router } from 'express';
/* const CartaDBController = require('../controllers/bdController'); */

import { CartaDBController } from '../controllers/bdController';

const router = Router();

//router.get('/',      CartaDBController.index);
router.get('/cartas',   CartaDBController.listarTodas);
/* router.post('/',     CartaDBController.store);
router.put('/:id',   CartaDBController.update);
router.delete('/:id', CartaDBController.destroy); */

module.exports = router;
