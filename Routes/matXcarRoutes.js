import { Router } from 'express';
import { matXcarController } from '../controllers/matXcarController.js';

export const matXcarRouter  = Router();

matXcarRouter.get('/', matXcarController.getAll)

matXcarRouter.get('/:id', matXcarController.getByFilter) 


