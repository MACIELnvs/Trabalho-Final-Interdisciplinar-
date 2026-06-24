import { Router } from 'express';
import * as ctrl from '../controller/colecao.controller';

const router: Router = Router();

router.get('/', ctrl.index);
router.get('/:id', ctrl.show);
router.post('/', ctrl.store);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.destroy);

export default router;
