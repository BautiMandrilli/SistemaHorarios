import { Router } from 'express';
import { matXcorreController } from '../controllers/matXcorreController.js';

export const matXcorreRouter  = Router();

matXcorreRouter.get('/', matXcorreController.getAll)




