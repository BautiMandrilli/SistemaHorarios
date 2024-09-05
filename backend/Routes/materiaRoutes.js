import { Router } from 'express';
import { materiaController } from '../controllers/tempController.js';

export const materiasRouter  = Router();

materiasRouter.get('/', materiaController.getAll)

materiasRouter.get('/:id', materiaController.getById) 

materiasRouter.post('/', materiaController.create)

materiasRouter.patch('/:id', materiaController.update)
    
materiasRouter.delete('/:id', materiaController.delete)   

