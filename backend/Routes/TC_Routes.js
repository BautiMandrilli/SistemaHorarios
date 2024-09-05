import { Router } from 'express';
import { TC_Controller } from '../controllers/TC_Controller.js';

export const TC_Router  = Router();

TC_Router.get('/', TC_Controller.getAll)

TC_Router.get('/:id', TC_Controller.getById) 

TC_Router.post('/', TC_Controller.create)

TC_Router.patch('/:id', TC_Controller.update)
    
TC_Router.delete('/:id', TC_Controller.delete)   

