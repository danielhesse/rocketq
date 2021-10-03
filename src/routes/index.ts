import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (_: Request, response: Response) => {
  return response.render('index');
});

routes.get('/room', (_: Request, response: Response) => {
  return response.render('room');
});

routes.get('/create-room', (_: Request, response: Response) => {
  return response.render('create-room');
});

// Format that the form within the modal must pass for the information
// routes.get(
//   '/room/:room_id/:question_id/:action',
//   (request: Request, response: Response) => {
//     return response.render('example', { request });
//   },
// );

export { routes };
