import { Router } from 'express';
import { cursoController } from '../controllers/cursoController.js';

export const cursosRouter  = Router();

cursosRouter.get('/', cursoController.getAll)

cursosRouter.get('/:id', cursoController.getById) 

cursosRouter.post('/', cursoController.create)

cursosRouter.patch('/:id', cursoController.update)
    
cursosRouter.delete('/:id', cursoController.delete)   

