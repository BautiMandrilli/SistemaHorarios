import { Router } from 'express';
import { tipoCorController } from '../controllers/tipoCorController.js';

export const tipoCorRouter  = Router();

tipoCorRouter.get('/', tipoCorController.getAll)

tipoCorRouter.get('/:id', tipoCorController.getById) 

tipoCorRouter.post('/', tipoCorController.create)

tipoCorRouter.patch('/:id', tipoCorController.update)
    
tipoCorRouter.delete('/:id', tipoCorController.delete)   

