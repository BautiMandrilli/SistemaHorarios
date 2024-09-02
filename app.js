import express, { json } from 'express';
import jwt from 'jsonwebtoken';
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
  const token = jwt.sign(guestUser, '8cc39134ff0a5421174782115b25ef0a85a940a99b74e6543c1bca9c6883d60d', { expiresIn: '1h' });
  res.json({ token });
});

// Middleware de autenticación y autorización
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

const PORT = process.env.PORT ?? 64000;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
