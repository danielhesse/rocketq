import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import path from 'path';

import { AppError } from './errors/AppError';
import { routes } from './routes';

const app = express();

// app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333.');
});
