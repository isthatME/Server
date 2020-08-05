import express from 'express';
import classController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();

const calssControllers = new classController();
const connectionsController = new ConnectionController();

routes.post('/classes', calssControllers.create);
routes.get('/classes', calssControllers.index);

routes.post('/connections', connectionsController.create);

export default routes;