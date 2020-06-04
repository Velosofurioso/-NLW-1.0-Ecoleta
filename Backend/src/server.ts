import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes/routes';


const app = express();

app.use(cors());

app.use(express.json()); // FALA AO EXPRESS QUE SERÁ UTILIZADO JSON COMO TIPO DE DADO PARA AS REQUISIÇÕES

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen('3333');