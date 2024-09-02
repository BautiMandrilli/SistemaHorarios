import express, { json } from 'express';
import jwt from 'jsonwebtoken';
import {PORT, SECRET_KEY} from './config/env.js'
import { authenticateToken, authorizeRole } from './middlewares/jwtToketn.js';
import { materiasRouter } from './Routes/materiaRoutes.js';
import { cursosRouter } from './Routes/cursoRoutes.js';
import { carrerasRouter } from './Routes/carreraRoutes.js';
import { TC_Router } from './Routes/TC_Routes.js';
import { fechaClasesRouter } from './Routes/fechaClaseRouter.js';
import { tipoCorRouter } from './Routes/tipoCorRouter.js';
import { matXcarRouter } from './Routes/matXcarRoutes.js';
import { matXcorreRouter } from './Routes/matXcorreRoutes.js';
import { principalRouter } from './Routes/tablaIntermediaRoutes.js';

const app = express();
app.use(json());
app.disable('x-powered-by');

// Generar un token de Guest
app.get('/login/guest', (req, res) => {
  const guestUser = { id: Date.now(), username: 'Guest', role: 'guest' };
  const token = jwt.sign(guestUser, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});


app.use('/materias', authenticateToken, materiasRouter);
app.use('/cursos', authenticateToken, cursosRouter);
app.use('/tipoCuatri', authenticateToken, TC_Router);
app.use('/carreras', authenticateToken, carrerasRouter);
app.use('/fechaClase', authenticateToken, fechaClasesRouter);
app.use('/tipoCorrelativa', authenticateToken, tipoCorRouter);
app.use('/matXcar', authenticateToken, matXcarRouter);
app.use('/matXcorre', authenticateToken, matXcorreRouter);

// Rutas protegidas
app.use('/principal', authenticateToken, authorizeRole('guest', 'user', 'administrator'), principalRouter);


app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
