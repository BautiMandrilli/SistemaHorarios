import express, {json} from 'express';
import { materiasRouter } from './Routes/materiaRoutes.js';

const app = express();
app.use(json())
app.disable('x-powered-by')

app.use('/materias', materiasRouter)

const PORT = process.env.PORT ?? 64000;

app.listen(PORT, (req, res) => {
    console.log(`Escuchando en el puerto ${PORT}`)
})
