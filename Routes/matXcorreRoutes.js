import { Router } from 'express';
import { matXcorreController } from '../controllers/matXcorreController.js';

export const matXcorreRouter  = Router();

matXcorreRouter.get('/', matXcorreController.getAll)
matXcorreRouter.get('/:id', matXcorreController.findAllCorrelativas)
matXcorreRouter.post('/', matXcorreController.create)
matXcorreRouter.delete('/:idMateriaAInscribir/:idMateriaCorrelativa', matXcorreController.delete)




