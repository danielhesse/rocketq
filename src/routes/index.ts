import { Request, Response, Router } from 'express';

import { QuestionsController } from '../controllers/QuestionsController';
import { RoomsController } from '../controllers/RoomsController';

const routes = Router();

const questionsController = new QuestionsController();
const roomsController = new RoomsController();

// Page's
routes.get('/', (_: Request, response: Response) => {
  return response.render('index', { page: 'enter-room' });
});

routes.get('/create-room', (_: Request, response: Response) => {
  return response.render('index', { page: 'create-room' });
});

// Question's controller
// Format that the form within the modal must pass for the information
routes.post('/question/:roomId/:questionId/:action', questionsController.index);

routes.post('/question/create/:roomId', questionsController.create);

// Room's controller
routes.post('/create-room', roomsController.create);

routes.get('/room/:roomId', roomsController.open);

export { routes };
