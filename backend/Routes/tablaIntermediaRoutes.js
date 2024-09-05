import { Router } from 'express';
import { MatXCursoXTCXClaseController } from '../controllers/tablaIntermediaController.js';
import { authenticateToken, authorizeRole } from '../middlewares/jwtToketn.js';

export const principalRouter = Router();

principalRouter.get('/', MatXCursoXTCXClaseController.getAll);

principalRouter.get('/:id', authenticateToken, authorizeRole('user', 'administrator'), MatXCursoXTCXClaseController.findAllCorrelativas);

principalRouter.post('/', authenticateToken, authorizeRole('administrator'), MatXCursoXTCXClaseController.create);

principalRouter.delete('/:idMateriaAInscribir/:idMateriaCorrelativa', authenticateToken, authorizeRole('administrator'), MatXCursoXTCXClaseController.delete);


