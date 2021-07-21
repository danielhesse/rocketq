import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.render('index');
});

routes.get('/room', (request: Request, response: Response) => {
  return response.render('room');
});

routes.get('/create-room', (request: Request, response: Response) => {
  return response.render('create-room');
});

export { routes };
