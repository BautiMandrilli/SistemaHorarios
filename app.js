import express, {json} from 'express';
import { materiasRouter } from './Routes/materiaRoutes.js';
import { cursosRouter } from './Routes/cursoRoutes.js';
import { carrerasRouter } from './Routes/carreraRoutes.js';
import { TC_Router } from './Routes/TC_Routes.js';
import { fechaClasesRouter } from './Routes/fechaClaseRouter.js';
import { tipoCorRouter } from './Routes/tipoCorRouter.js';

const app = express();
app.use(json())
app.disable('x-powered-by')

app.use('/materias', materiasRouter)
app.use('/cursos', cursosRouter)
app.use('/tipoCuatri', TC_Router)
app.use('/carreras', carrerasRouter)
app.use('/fechaClase', fechaClasesRouter)
app.use('/tipoCorrelativa', tipoCorRouter)


const PORT = process.env.PORT ?? 64000;

app.listen(PORT, (req, res) => {
    console.log(`Escuchando en el puerto ${PORT}`)
})
