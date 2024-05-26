import express from 'express';
import cors from 'cors';
import cancionesRoutes from './routes/cancionesRoutes.js'
import path from 'path'

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', cancionesRoutes)

app.get('/', (req, res) => {
  res.sendFile(path.resolve("index.html"))
});

app.listen(PORT, console.log(`Server on http://localhost:${PORT}`));

//NOTA: estuve agregando y quitando cosas porque seguí pasos de la guía y luego viendo videos habían otras cosas así que entre poner y quitar, allí quedo más o menos porque mucho de lo que hice fue puro copiar
