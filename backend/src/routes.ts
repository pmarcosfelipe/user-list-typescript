import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.list);
routes.get('/users/create', UserController.create);

export default routes;
