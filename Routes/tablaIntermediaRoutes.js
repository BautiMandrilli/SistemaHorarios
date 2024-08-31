import { Router } from 'express';
import { MatXCursoXTCXClaseController } from '../controllers/tablaIntermediaController.js';

export const principalRouter  = Router();

principalRouter.get('/', MatXCursoXTCXClaseController.getAll)
principalRouter.get('/:id', MatXCursoXTCXClaseController.findAllCorrelativas)
principalRouter.post('/', MatXCursoXTCXClaseController.create)
principalRouter.delete('/:idMateriaAInscribir/:idMateriaCorrelativa', MatXCursoXTCXClaseController.delete)




