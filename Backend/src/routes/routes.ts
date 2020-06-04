import express, { response } from 'express';
import PointControllers from '../controllers/pointsControllers';
import ItemsControllers from '../controllers/itemsControllers';

const routes = express.Router();
const pointControllers = new PointControllers();
const itemsControllers = new ItemsControllers();

routes.get('/items', itemsControllers.index);

routes.post('/points', pointControllers.create);
routes.get('/points/:id', pointControllers.show);
routes.get('/points', pointControllers.index);
export default routes;