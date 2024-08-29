import { Router } from 'express';
import { carreraController } from '../controllers/carreraController.js';

export const carrerasRouter  = Router();

carrerasRouter.get('/', carreraController.getAll)

carrerasRouter.get('/:id', carreraController.getById) 

carrerasRouter.post('/', carreraController.create)

carrerasRouter.patch('/:id', carreraController.update)
    
carrerasRouter.delete('/:id', carreraController.delete)   

