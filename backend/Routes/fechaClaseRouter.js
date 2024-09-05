import { Router } from 'express';
import { fechaClaseController } from '../controllers/fechaClaseController.js';

export const fechaClasesRouter  = Router();

fechaClasesRouter.get('/', fechaClaseController.getAll)

fechaClasesRouter.get('/:id', fechaClaseController.getById) 

fechaClasesRouter.post('/', fechaClaseController.create)

fechaClasesRouter.patch('/:id', fechaClaseController.update)
    
fechaClasesRouter.delete('/:id', fechaClaseController.delete)   

