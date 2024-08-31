import express, {json} from 'express';
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
app.use(json())
app.disable('x-powered-by')

app.use('/materias', materiasRouter)
app.use('/cursos', cursosRouter)
app.use('/tipoCuatri', TC_Router)
app.use('/carreras', carrerasRouter)
app.use('/fechaClase', fechaClasesRouter)
app.use('/tipoCorrelativa', tipoCorRouter)
app.use('/matXcar', matXcarRouter)
app.use('/matXcorre', matXcorreRouter)
app.use('principal', principalRouter)

const PORT = process.env.PORT ?? 64000;

app.listen(PORT, (req, res) => {
    console.log(`Escuchando en el puerto ${PORT}`)
})
